const db = require(`./models`);

//let's make sure we know how to hard code this data and
// determine how this json will be different when dynamic

let albumList = {
    name: `Paris`,
    email: `123@SpeechGrammarList.com`,
    password: `stuff`,
    profilePic: `URL`,
    albumList: [{
        name: `soFarGone`,
        releaseDate: `2009`,
        // artist: {
        //     image: `URL`,
        // },
        image: "",
        album: ""
    }],

};

// Clear out the all the data and create album
db.Users.deleteMany({}, (err, albums) => {
    db.Users.create(albumList, (err, albums) => {
        if (err) return console.log(err);
        console.log(`created the ablums ${albums} `)
    });
})