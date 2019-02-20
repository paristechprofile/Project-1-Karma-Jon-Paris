const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: String,
    artistPic: String,
})

const AlbumSchema = new Schema({
    name: String,
    releaseDate: String,
    artist: ArtistSchema
});

const Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;