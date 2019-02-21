// import model files 
const
    express = require(`express`),
    bodyParser = require(`body-parser`),
    db = require(`./models`);

//set app to axpress library
let app = express();

//serve static files from public folder
app.use(express.static(`/views/index.html`));

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
});