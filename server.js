// import model files 
const
    express = require(`express`),
    bodyParser = require(`body-parser`),
    db = require(`./models`);

//set app to axpress library
let app = express();

//serve static files from public folder
app.use(express.static(`public`));

//body parser config to accept datatypes
app.use(bodyParser.urlencoded({
    extended: true
}));


// // // // // // // // 
// DATA 
// // // // // // // // 


// // // // // // // // 
// ROUTES
// // // // // // // // 
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

// Get a single album
app.get('/albums/:id', (req, res) => {
    db.Album.findOne({
        _id: req.params.id
    }, (err, foundAlbum) => {
        if (err) return console.log(`Album title is not correct ${err}`);

        res.json(foundAlbum);
    }).populate('album').exec((err, foundAlbum) => {
        if(err) return console.log(err);
        res.json(foundAlbum)
    })
})

// 

// Listening server on localhost:3000
app.listen(process.env.PORT || 3000, () => {
    console.log(`Catchy listening at localhost3000`)
})