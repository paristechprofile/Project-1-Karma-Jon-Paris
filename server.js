const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json())

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/*
 * HTML Endpoints
 */

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})


/*
 * Response Endpoints
 */

// console.log("hello")
// Find all Users 
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

// Find One User & All Albums
app.get("/api/user/:id", (req, res) => {

    db.User.findOne({
            _id: req.params.id
        }, (err, foundUser) => {
            if (err) {
                console.log(err)
            }
        }).populate('album')
        .exec((err, users) => {
            if (err) {
                throw err;
            }
            console.log(users);
            res.json(users);
        })
})

// Find One Album



// Create User
app.post("/api/user", (req, res) => {
    let newUser = new db.User({
        name: req.body.name,
        email: req.body.email,
        profilePic: req.body.profilePic
    });
    console.log(newUser);
    newUser.save((err, user) => {
        if (err) {
            throw err;
        }


        res.json(user);
    })
});

//Update a User
// Still needs testing. 
// app.put('/api/user/:id',(req,res)=>{

//       const userId = req.params.id;

//       db.User.findOneAndUpdate(
//         { _id: userId},
//         req.body,
//         {new: true},
//         (err, updatedUser) => {
//         if (err) {throw err;}
//         res.json(updatedUser);
//       });
//     });

// create album 

app.post('/api/user/:id/albums', (req, res) => {
    db.User.findOne({
        _id: req.params.id
    }, (err, foundUser) => {
        if (err) {
            console.log(err)
        }
        console.log(`user at create new album for user: ${foundUser}`);

        let newArtist = req.body.artist;
        let newAlbum = new db.Album({
            name: req.body.name,
            releaseDate: req.body.releaseDate,
            artist: newArtist
        });
        foundUser.albums.push(newAlbum);
        foundUser.save((err, user) => {
            if (err) {
                throw err;
            }

            res.json(user)
        })
    });
});

// Delete an Album


app.delete('/api/user/:id/albums/:id', (req, res) => {
    db.Album.remove({
        _id: req.params.id
    }, (err, removedAlbum) => {
        if (err) {
            console.log(err)
        }
        res.json(removedAlbum);
    })
});


//Run server and run on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});