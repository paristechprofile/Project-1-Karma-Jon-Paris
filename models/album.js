const AlbumSchema = new Schema({
    name: String,
    releaseDate: String,
    artist: {
        name:String,
        artistPic: String,
    }
});

const Album = mongoose.model(`Album`, AlbumSchema);
module.exports = Album;
