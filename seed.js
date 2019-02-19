const db = require('./models');

let princeAlbum = {
    name: "Purple Rain",
        releaseDate: "1984",
        artist: {
            name:"Prince",
            artistPic: "",
         }
};

let user3 = {
    name: "New Person",
    email: "New@email.com",
    profilePic: "",
    albums: []
}

let user_List = [{
    name: "Jon",
    email: "Jon@email.com",
    profilePic: "",
    albums: [{
        name: "So Far So Gone",
        releaseDate: "2009",
        artist: {
            name:"Drake",
            artistPic: "",
         }
    }]
},
{
    name: "Karma",
    email: "Karma@email.com",
    profilePic: "",
    albums: [{
        name: "Teenage Dream",
        releaseDate: "2010",
        artist: {
            name:"Katty Perry",
            artistPic: "",
         }
    }]
},
{
    name: "Paris",
    email: "Paris@email.com",
    profilePic: "",
    albums: [{
        name: "Millennium",
        releaseDate: "1999",
        artist: {
            name:"Backstreet Boys",
            artistPic: "",
         }
    }]
}
];
// Adding a new user and a new album to that new user.
db.User.remove({}, (err,users)=>{
    db.Album.remove({}, (err,albums)=>{
        db.Album.create( princeAlbum, (err, savedAlbum)=> {
            if(err){console.log("error is in 1");}
            else {
                console.log('album saved');
                db.User.create(user3, (err, savedUser)=>{
                    if(err){console.log("error is in 2");}
                    savedUser.albums.push(savedAlbum);
                    savedUser.save( (err,savedUserAlbum) => {
                        if(err){console.log("error is in 3");}
                        else{
                            console.log(`User3 now has ${savedAlbum} inside of it and the user's object is ${savedUser}`);
                        }
                    })
                })
            }
        })
    })
});

// Adding the array of users listed above under user_list
for (i = 0;i < user_List.length; i++){
    db.Album.create( user_List[i].albums, (err, savedAlbum)=> {
        if(err){console.log("error is in 1");}
        else {
            console.log('album saved');
            db.User.create(user_List[i], (err, savedUser)=>{
                if(err){console.log("error is in 2");}
                savedUser.albums.push(savedAlbum);
                savedUser.save( (err,savedUserAlbum) => {
                    if(err){console.log("error is in 3");}
                    else{
                        console.log(`User3 now has ${savedAlbum} inside of it and the user's object is ${savedUser}`);
                    }
                })
            })
        }
    })
};
