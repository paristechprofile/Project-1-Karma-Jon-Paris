# App Name

*Short explanation of the project (1-2 sentences) - what is the goal of the project and/or main functionality?*

[Link to project hosted on Heroku]()

## Technologies Used

*What technologies did you use to develop this project? (bullet points)*



## Existing Features

*What features does your app have? (bullet points)*




## Planned Features

*What changes would you make to your project if you continue to work on it? (bullet points)*

---

##### Screenshot(s) (optional)

##Process
* Process to set up a backend:
    * Set up file names
        * server.js 
            * starts with the required aspects with requiring the tools needed to spin up server
            * then middleware like app.use or express.static with the public folder name
            * then set up routes like GET, POST, PUT, DELETE routes. Which direct traffic
            * finally- it has to be listening for the requests with api. port number
                * if error, close terminal. 
                * if not working killall 
        * set up nodemon and mongod at the same time. Test in Postmon that the routes are working. there won’t be data but you can console log something
        * Create models
            * two requirements
                * a folder called models
                * a file called index.js that requires mongoose that initiates a mongoose.connect
            * create individual models
                * import mongoose
                * describe the schemas
                * export the mongoose model with by exporting to a variable
        * seed.js - built to help you use hard-coded data to seed the server with data from the database
            * be careful about deleting data with functions. Don’t want to delete user data
        *  Fill out what the routes actually do
            * import the db with the require models statement
                * db.model.find etc
        * Use Ajax calls to consume the data from the local url
            * 

