const db = require('./models');

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