const db = require('./models');

let princeAlbum = {
    name: "Purple Rain",
        releaseDate: "1984",
        albumPic:"images/Purple-rain-cover.1.jpg",
        artist: {
            name:"Prince",
            artistPic: "",
    }
};

let albumsList = [
    {
        name: "My Bloody Valentine",
        releaseDate: "1991",
        albumPic:"images/My_Bloody_Valentine_-_Loveless.1.png",
        artist: {
            name:"Loveless",
            artistPic: "",
        }
    },
    {
        name: "A Seat At The Table",
        releaseDate: "2013",
        albumPic:"images/Solange_-_A_Seat_at_the_Table.1.png",
        artist: {
            name:"Solange",
            artistPic: "",
        }   
    },
    {
        name: "Get Rich Or Die Trying",
        releaseDate: "2005",
        albumPic:"images/50Cent.JPG",
        artist: {
            name:"50 Cent",
            artistPic: "",
        }   
    },
    {
        name: "Abbey Road",
        releaseDate: "1969",
        albumPic:"images/abbyroad.jpg",
        artist: {
            name:"Loveless",
            artistPic: "",
        } 
    },
    {
        name: "All The Right Reasons",
        releaseDate: "2005",
        albumPic:"images/allTheRightReasons.png",
        artist: {
            name:"Nicleback",
            artistPic: "",
        } 
    },
    {
        name: "The Miseducation of Lauryn Hill",
        releaseDate: "2013",
        albumPic:"images/miseducation.jpg",
        artist: {
            name:"Lauryn Hill",
            artistPic: "",
        } 
    },
    {
        name: "Believe",
        releaseDate: "2012",
        albumPic:"images/bieber.png",
        artist: {
            name:"Justin Bieber",
            artistPic: "",
        } 
    },
    {
        name: "The Bluepring 3",
        releaseDate: "2013",
        albumPic:"images/blueprint.png",
        artist: {
            name:"Jay-Z",
            artistPic: "",
        }     
    },
];

let user3 = {
    name: "Paris",
    email: "Paris@email.com",
    profilePic: "",
    albums: []
};

// Adding a new user and a new album to that new user. 
db.User.deleteMany({}, (err,users)=>{
    db.Album.deleteMany({}, (err,albums)=>{
        db.Album.create(princeAlbum, (err, savedAlbum)=> {
            if(err){console.log(err);}

            // savedAlbum.artist = artist;
            console.log(savedAlbum);
            savedAlbum.save((err,savedArtistAlbum) => {
                if(err){console.log(err);}

                db.User.create(user3, (err, savedUser)=>{
                    if(err){console.log(err);}
                    savedUser.albums.push(savedArtistAlbum);
                    savedUser.save( (err,savedUserAlbum) => {
                        if(err){console.log("error is in 3");}

                        console.log(JSON.stringify(savedUserAlbum));
                    })
                })
            })
        })

        db.Album.create(albumsList, (err, savedAlbums) => {
            if(err){return console.log(err);}
        
            console.log(`created ${ savedAlbums.length } albums`);
        })
    })
});
