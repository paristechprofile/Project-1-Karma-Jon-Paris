const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
        name: String,
        email: String,
        profilePic: String,
        albums: [{
            type: Schema.Types.ObjectId,
            ref: `Album`
        }],
    });
    
const Users = mongoose.model(`Users`, UsersSchema);
module.exports = Users;
