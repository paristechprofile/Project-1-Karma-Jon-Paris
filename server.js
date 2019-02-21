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


//  passport.use(new localStrategy(User.authenticate()));
// These two method are responsible for reading the sesssion and decoding and uncoding the session 

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


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
app.use(bodyParser.json());

// // // // // // // // 
// ROUTES
// // // // // // // // 
// // Homepage route
// app.get('/', (req, res) => {
//     res.render('home');
// })
// ////////////////////////////////////////////////////////////////////////////////////
// GOOGLE AUTH
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
}
verify().catch(console.error);

// //////////////////////////////////////////////////////////////




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

// Secret route
app.get('/secret', isLoggedIn, (req, res) => {
    res.render("secret")
})

// LOGIN ROUTES
// Render login form
app.get('/login', (req, res) => {
    res.render("login");
})

// Login logic
// Middleware  - it runs before our final callback
// passport.authenticate the credentials whether password is correct or wrong
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), (req, res) => {})

// Handling logout
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

// Creating middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}


// Get Route
// find the all user
app.get('/api/users', (req, res) => {
    db.User.find()
        .populate('albums')
        .exec((err, users) => {
            if (err) {
                throw err;
            }
            console.log(users);
            res.json(users);
        })
})

// Get Album by id
app.get('/api/users/:id', (req, res) => {
    db.Album.findOne({
        _id: req.params.id
    }, (err, foundUser) => {
        if (err) return console.log(`Album title is not correct ${err}`);
        res.json(foundUser);
    }).populate('user').exec((err, users) => {
        if (err) {
            throw err;
        }
        console.log(users);
        res.json(users);
    })
})

// POST ROUTE 
app.post('/api/user', (req, res) => {
    // create a new User
    let newUser = new db.User({
        name: req.body.name,
        email: req.body.email,
        profilePic: req.body.profilePic
    });
    console.log(newUser);
    newUser.save((err, user) => {
        if (err) return console.log(err);
        res.json(user);
    })
})

// Delete User by id
app.delete('/api/users/:id', (req, res) => {
    console.log("user Delete", req.params);
    const userId = req.params.id;

    // find one and remove
    db.User.findOneAndDelete({
        _id: userId
    }, (err, deletedUser) => {
        if (err) throw err;
        res.json(deletedUser);
    })
})


// Listening server on localhost:3000
app.listen(process.env.PORT || 3000, () => {
    console.log(`Catchy listening at localhost3000`)
})
