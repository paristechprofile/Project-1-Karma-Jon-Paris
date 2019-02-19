const db = require(`./models`);

//let's make sure we know how to hard code this data and
// determine how this json will be different when dynamic

let users = [{
    name: 'Paris',
    email: `123@SpeechGrammarList.com`,
    profilePic: 'URL',
    albumList: [],

}];

let albums = [{
    name: "HELLO",
    releaseDate: "2019",
    artist: "Karma",
    image: "",
    album: "",
    user: 'Paris'
}]

// Creating a new Album
db.User.deleteMany({}, (err, album) => {
    
    db.User.create(users, (err, createUsers) => {
        if (err) return console.log(err);
        console.log(`created the ablum ${createUsers} `)
    })
})

// Looping through an array of album
albums.forEach(album => {
    let newAlbum = new db.Album({
        name: album.name,
        releaseDate: album.releaseDate,
        artist: album.artist,
        image: album.image,
        album: album.album
    })
    newAlbum.save((err, savedAlbum) => {
        if (err) return console.log(err);
        db.User.find({
            name: album.user
        }, (err, foundUser) => {
            if (err) return console.log(err);
            foundUser.albums.push(savedAlbum);
            foundUser.save()
        })
    });

})