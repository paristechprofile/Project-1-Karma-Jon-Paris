const
    mongoose = require(`mongoose`),
    Schema = mongoose.Schema;

const ArtistSchema = new Schema({
        name: String,
        artistUrl: String,
        albumsByArtist: [{
            /* artist data */
        }]
    }),
    Artist = mongoose.model(`Artist`, ArtistSchema);
module.exports = Artist;

