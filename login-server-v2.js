// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
// }



const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const jwt = require ('jsonwebtoken')
const jwtSimple = require('jwt-simple')
const bodyParser = require("body-parser");
//const initializePassport = require('./passport-config')
const cookieParser = require('cookie-parser')
//const { logIn, welcome, refresh } = require("./handlers")

//require mongoose-translates Node.js
const mongoose = require ("mongoose");
mongoose.set('useFindAndModify', false);
//returns object AFTER update was applied
mongoose.set('returnOriginal', false);

//call in schema models
var User = require ("./models/userDatabase.js");

//add path library
const path = require("path");

//declare port to connect t0
const port = 3000;

//connect to Atlas cluster
const mongoDB = "mongodb+srv://wastenotskilledkc:madANDal4life2021@wastenot1.sj0ff.mongodb.net/WasteNot1?retryWrites=true&w=majority";


//accessing the connect method of mongoose
//pass it the name of the DB cluster we have created
//mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database');
    });
const db = mongoose.connection;

//turns on the connection
db.on('error', console.error.bind(console, 'connection error:'));


//use the following middleware
app.use(
    //middleware for delivering static files
    express.static(
        //uses path library to take care of relative paths
        path.join(__dirname, 'public')));


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));



//connect Mongoose - here  : HTML can do a post in the code bypassing the js file (per Jeff K)
//THIS WILL NEED TO BE CHANGED TO POSTS WITH DATABASE STORAGE FOR PRODUCTION!!!
//const users = []

//app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
//app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.use(express.json())
app.use (cookieParser())







app.listen(3000,()=>{
    console.log('Server up at 3000')
})
