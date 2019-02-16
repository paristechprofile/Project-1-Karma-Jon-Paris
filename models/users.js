const
    mongoose = require(`mongoose`),
    Schema = mongoose.Schema;

const UsersSchema = new Schema({
        _id: Number,
        name: String,
        email: String,
        password: String,
        profilePic: String,
        albumList: [{
            type: Schema.Types.ObjectId,
            ref: `AlbumList`
        }],
    }),
    Users = mongoose.model(`Users`, UsersSchema);
module.exports = Users;