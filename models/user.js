const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        name: String,
        email: String,
        profilePic: String,
        albums: [{
            type: Schema.Types.ObjectId,
            ref: `Album`
        }],
    });
    
const User = mongoose.model(`Users`, UserSchema);
module.exports = User;
