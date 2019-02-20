const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    profilePic: String,
    albums: [{
        type: Schema.Types.ObjectId,
        ref: `Album`
    }],
});

// UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model(`User`, UserSchema);
module.exports = User;