<<<<<<< HEAD
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
=======
const
    mongoose = require(`mongoose`),
    Schema = mongoose.Schema;
>>>>>>> ed506ccc2ca9dd270cc8de209d0dc375b235f83b

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