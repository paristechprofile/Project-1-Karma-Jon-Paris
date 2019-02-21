const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const ArtistSchema = new Schema({
        name: String,
        artistUrl: String,
        albumsByArtist: [{
            /* artist data */
        }]
    });
const Artist = mongoose.model(`Artist`, ArtistSchema);
module.exports = Artist;

