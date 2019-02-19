// import model files 
const express = require(`express`);
const mongoose = require('mongoose');
const bodyParser = require(`body-parser`);
const db = require(`./models`);

mongoose.connect('mongodb://localhost/catchy-app');

//set app to axpress library
let app = express();

//serve static files from public folder
app.use(express.static(`public`));

//body parser config to accept datatypes
app.use(bodyParser.urlencoded({ useNewUrlParser: true } ));


// // // // // // // // 
// DATA 
// // // // // // // // 


// // // // // // // // 
// ROUTES
// // // // // // // // 

// 


app.listen(process.env.PORT || 3000, function() {
   console.log(`Catchy listening at localhost3000`);
});
