const db = require(`./models`);

//let's make sure we know how to hard code this data and
// determine how this json will be different when dynamic

let user1 = {
    name: `Paris`,
    email: `123@SpeechGrammarList.com`,
    profilePic: `URL`,
    albumList: [{
        name: `soFarGone`,
        releaseDate: `2009`,

        image: "hello",
        album: "RockStar"
    }],

};

// Creating a new Album
db.User.remove({}, (err, album) => {
    db.User.create(album, (err, createAlbum) => {
        if (err) return console.log(err);
        console.log(`created the ablum ${createAlbum} `)
    });
})

