const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
    
const AlbumSchema = new Schema({
        name: String,
        releaseDate: String,
        artist: {
            name:String,
            artistPic: String,
        },
        image: String,
        album: String
    });
    
const Album = mongoose.model(`Album`, AlbumSchema);
module.exports = Album;
