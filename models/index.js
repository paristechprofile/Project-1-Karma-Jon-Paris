const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catchy-app', { useNewUrlParser: true } );

module.exports = {
    User : require('./user'),
    Album: require('./album'),
}