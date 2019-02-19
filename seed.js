const db = require(`./models`);

//let's make sure we know how to hard code this data and
// determine how this json will be different when dynamic

let dummyUser= [{
    _id: 1,
    name: `Paris`,
    email: `123@SpeechGrammarList.com`,
    password: `stuff`,
    profilePic: `URL`,
}];

let dummyArtist= [{
    _id: 1,
    name: `Paris`,
    email: `123@SpeechGrammarList.com`,
    password: `stuff`,
    profilePic: `URL`,
}];

let dummyAlbum= [{
    _id: 1,
    name: `Paris`,
    email: `123@SpeechGrammarList.com`,
    password: `stuff`,
    profilePic: `URL`,
}];

db.User.create(dummyUser, (err,newUser)=>{
    if(err) return console.log(err);
    console.log(newUser);
})
