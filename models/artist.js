const
    mongoose = require(`mongoose`),
    Schema = mongoose.Schema,
    ArtistSchema = new Schema({
        name: String,
        artistUrl: String,
        albumsByArtist: [{

        }]
    }),
    Artist = mongoose.model(`Artist`, ArtistSchema);
module.exports = Artist;

