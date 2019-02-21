const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catchy', { useNewUrlParser: true } );

module.exports = {
    Album : require('./album'),
    Artist: require('./artist'),
}

$(document).ready(() => {
    $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
    });
});