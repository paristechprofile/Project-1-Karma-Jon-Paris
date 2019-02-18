// import model files 
const
    express = require(`express`),
    bodyParser = require(`body-parser`),
    db = require(`./models`),
    mongoose = require('mongoose'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User = require('./models/user')

mongoose.connect("mongodb://localhost/catchy-app", {
    useNewUrlParser: true
});


//set app to axpress library
let app = express();
// set up ejs
app.set('view engine', 'ejs')

//  Using Session 
app.use(require("express-session")({
    secret: "Hello programmer",
    resave: false,
    saveUninitialized: false
}))

// These two method are responsible for reading the sesssion and decoding and uncoding the session 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Tell express to use passport
// Need these two method anytime when we are using passport
app.use(passport.initialize());
app.use(passport.session())

//serve static files from public folder
app.use(express.static(`public`));

//body parser config to accept datatypes
app.use(bodyParser.urlencoded({
    extended: true
}));


// // // // // // // // 
// ROUTES
// // // // // // // // 
// // Homepage route
// app.get('/', (req, res) => {
//     res.render('home');
// })


// Define a root route: localhost:3000/
app.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: __dirname
    })
})

//  Go to Album route
app.get('/albums', (req, res) => {
    db.Album.find((err, foundAblums) => {
        if (err) return console.log(err);
        res.json(foundAblums);
    })
})

// Auth Routes

// Show sign up form
app.get('/register', (req, res) => {
    res.render("register")
})

// Handling the user sign up 
app.post('/register', (req, res) => {
    req.body.username;
    req.body.password;
    // Make new user object 
    User.register(new User({
        username: req.body.username
    }), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            // rendering the register page
            return res.render('register');
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect('/secret');
        });
    })
})
// Get a single album
app.get('/albums/:id', (req, res) => {
    db.Album.findOne({
        _id: req.params.id
    }, (err, foundAlbum) => {
        if (err) return console.log(`Album title is not correct ${err}`);

        res.json(foundAlbum);
    }).populate('album').exec((err, foundAlbum) => {
        if (err) return console.log(err);
        res.json(foundAlbum)
    })
})

// Secret route
app.get('/secret', (req, res) => {
    res.render("secret")
})

// Listening server on localhost:3000
app.listen(process.env.PORT || 3000, () => {
    console.log(`Catchy listening at localhost3000`)
})