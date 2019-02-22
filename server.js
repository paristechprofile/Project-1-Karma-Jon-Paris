const 
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/*
 * HTML Endpoints
 */

 app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
 })

 app.get('/profile',(req,res)=>{
    res.sendFile(__dirname + '/views/userProfile.html')
 })
/*çç
 * Response Endpoints
 */
app.get('/api', (req,res)=>{
    res.json({
        
        intro: "This is the exciting Catchy API",
        documentationUrl: "https://github.com/paristechprofile/Project-1-Karma-Jon-Paris/blob/master/README.md",
        baseUrl: "http://YOUR-APP-NAME.herokuapp.com, Adding Later",
        endpoints: [
            { method: "GET", path: "/api", description: "Reference for Endpoints" },
            { method: "GET", path: "/api/users", description: "Show all users for admin" },
            { method: "GET", path: "/api/user/:id", description: "Shows One Specific User and their Album Collection" },
            { method: "GET", path: "/api/profile/:id", description: "Gives a user their profile information" },
            { method: "GET", path: "/api/albums", description: "Get all Albums in collection" },
            { method: "POST", path: "/api/user/newuser", description: "Create a new user" },
            { method: "POST", path: "/api/user/:id/albums", description: "Create new album for one user." },
            { method: "PUT", path: "/api/user/:id'", description: "Update a user's information" },
            { method: "DELETE", path: "/api/user/:userid/albums/:albumid", description: "Delete an album from a collection" }
        ]
    });})

// console.log("hello")
// Find all Users 
app.get('/api/users',(req,res)=>{
    db.User.find()
    // .populate('albums')
    .exec((err,users)=>{
        if(err){throw err;}
        console.log(users);
        res.json(users);
    })
})

// Find One User & All Albums
app.get("/api/user/:id",(req,res)=>{

    db.User.findOne({_id:req.params.id}, (err,foundUser)=>{
        if(err){console.log(err)}
            }).populate('albums')
            .exec((err,users)=>{
            if(err){throw err;}
            console.log(users);
            res.json(users);
    })
})

// Find One profile

app.get("/api/profile/:id",(req,res)=>{

    db.User.findOne({_id:req.params.id}, (err,foundUser)=>{
        if(err){console.log(err)}
            }).populate('albums')
            .exec((err,users)=>{
            if(err){throw err;}
            console.log(users);
            res.json(users);
    })
})

// Get All Albums in Collection 

app.get('/api/albums', (req, res) =>{
    db.Album.find({}, (err, albums)=>{
        if (err) {return console.log(err)}
        res.json(albums);
    })
})



// Create User
app.post("/api/user/newuser", (req,res)=>{
    let newUser = new db.User({
        name: req.body.name,
        email: req.body.email,
        profilePic:req.body.profilePic
        });
    console.log(newUser);
    newUser.save((err,user)=>{
        if(err){throw err;}
    

        res.json(user);  
    })
});

// create album

app.post('/api/user/:id/albums',(req,res)=>{
    db.User.findOne({_id:req.params.id}, (err,foundUser)=>{
        if (err) {return console.log(err)}
        console.log(`user at create new album for user: ${foundUser}`);
        if(foundUser){
            db.Album.findOne({name: req.body.name}, (err,foundAlbum)=>{
                if (err) {return console.log(err)}
                
                if(!foundAlbum){
                    console.log('album does not exist');
                    let newArtist = req.body.artist;
                    foundAlbum = new db.Album({
                        name: req.body.name,
                        releaseDate: req.body.releaseDate,
                        artist: newArtist
                    });
                    db.Album.create(foundAlbum, (err, newAlbum) => {
                        if (err) {return console.log(err)}
                        foundAlbum = newAlbum;
                    });
                }
                foundUser.albums.push(foundAlbum);
                foundUser.save((err,user)=>{
                    if(err){return console.log(err)}
                    res.json(user)
                })
            })
        }
        
        
    });
});



//Update a User
// Still needs testing. 
app.put('/api/user/:id',(req,res)=>{
     
      const userId = req.params.id;
    
      db.User.findOneAndUpdate(
        { _id: userId},
        req.body,
        {new: true},
        (err, updatedUser) => {
        if (err) {throw err;}
        res.json(updatedUser);
      });
    });



// Delete an Album


app.delete('/api/user/:userid/albums/:albumid',(req,res)=>{
    console.log('param',req.params.userid);
    db.User.findOne({_id:req.params.userid}, (err,foundUser)=>{
        // console.log('user found',foundUser)
        if (err) {console.log(err)}
        let deletedAlbum = req.params.albumid
        console.log('album to delete',deletedAlbum);
        let albums = foundUser.albums;
        for (i = 0; i < albums.length; i ++){
            if (albums[i]._id == deletedAlbum ){
                console.log(`Removing this album ${albums[i]}`)
                albums.splice(i,1);
                
            };
        }
        foundUser.albums = albums;
        foundUser.save((err,savedUser)=>{
            // console.log('user found',foundUser)
            if (err) {console.log(err)}
        res.json(savedUser);
        });
    });   
    });




//Run server and run on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});