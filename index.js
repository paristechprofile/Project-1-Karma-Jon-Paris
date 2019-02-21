const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catchy', { useNewUrlParser: true } );

module.exports = {
    Album : require('./album'),
    Artist: require('./artist'),
}

