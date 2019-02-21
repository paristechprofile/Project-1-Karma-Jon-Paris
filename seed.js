const db = require('./models');


let artist = {
    name:"Prince",
    artistPic: ""
 };

let princeAlbum = {
    name: "Purple Rain",
    releaseDate: "1984",
    artist: {
        name:"Prince",
        artistPic: ""
}
};

let user3 = {
    name: "New Person",
    email: "New@email.com",
    profilePic: "",
    albums: []
}


// Adding a new user and a new album to that new user. 
db.User.deleteMany({}, (err,users)=>{
    db.Album.deleteMany({}, (err,albums)=>{
        db.Album.create( princeAlbum, (err, savedAlbum)=> {
            if(err){console.log(err);}
            else {
                 savedAlbum.artist = artist;
                console.log(savedAlbum);
                savedAlbum.save((err,savedArtistAlbum) => {
                    if(err){console.log(err);}
                    else{
                        db.User.create(user3, (err, savedUser)=>{
                            if(err){console.log(err);}
                            savedUser.albums.push(savedArtistAlbum);
                            savedUser.save( (err,savedUserAlbum) => {
                                if(err){console.log("error is in 3");}
                                else
                                    // console.log(JSON.stringify(savedUserAlbum));
                                    console.log(savedUserAlbum)
                                })
                        })
                    }
                })
            }
        })
    })
});
