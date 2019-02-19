// import model files 
<<<<<<< HEAD
const express = require(`express`);
const bodyParser = require(`body-parser`);
const db = require(`./models`);
=======
const
    express = require(`express`),
    bodyParser = require(`body-parser`),
    db = require(`./models`);
>>>>>>> ed506ccc2ca9dd270cc8de209d0dc375b235f83b

//set app to axpress library
let app = express();

<<<<<<< HEAD
=======
console.log("Just testing out... hello hello")

>>>>>>> ed506ccc2ca9dd270cc8de209d0dc375b235f83b
//serve static files from public folder
app.use(express.static(`public`));

//body parser config to accept datatypes
app.use(bodyParser.urlencoded({extended: true}));


// // // // // // // // 
// DATA 
// // // // // // // // 


// // // // // // // // 
// ROUTES
// // // // // // // // 

app.listen(process.env.PORT || 3000, function() {
   console.log(`Catchy listening at localhost3000`);
<<<<<<< HEAD
});
=======
})

>>>>>>> ed506ccc2ca9dd270cc8de209d0dc375b235f83b
