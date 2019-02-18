const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app", {
    useNewUrlParser: true
});

module.exports.Album = require('./albums.js');
module.exports.Users = require('./users.js');