<<<<<<< HEAD
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
=======
const
    mongoose = require(`mongoose`),
    Schema = mongoose.Schema;

>>>>>>> ed506ccc2ca9dd270cc8de209d0dc375b235f83b
const ArtistSchema = new Schema({
        name: String,
        artistUrl: String,
        albumsByArtist: [{
            /* artist data */
        }]
    });
const Artist = mongoose.model(`Artist`, ArtistSchema);
module.exports = Artist;

