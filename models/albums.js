<<<<<<< HEAD

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
=======
const
    mongoose = require(`mongoose`),
    Schema = mongoose.Schema;
>>>>>>> ed506ccc2ca9dd270cc8de209d0dc375b235f83b
    
const AlbumSchema = new Schema({
        name: String,
        releaseDate: String,
        artist: {
            type: Schema.Types.ObjectId,
            ref: `Arist`
        },
        image: String,
        album: String
    });
const Album = mongoose.model(`Album`, AlbumSchema);

module.exports = Album;