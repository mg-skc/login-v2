// require('dotenv').config();
// const express = require('express')
// const app = express()
// const bcrypt = require('bcrypt')
// const methodOverride = require('method-override')
// const jwt = require ('jsonwebtoken')
// const bodyParser = require("body-parser");
// const JWT_Secret = process.env.JWT_SECRET;

// //require mongoose-translates Node.js
// const mongoose = require ("mongoose");
// mongoose.set('useFindAndModify', false);
// //returns object AFTER update was applied
// mongoose.set('returnOriginal', false);

// //call in schema models
// var User = require ("./models/userDatabase.js");

// //add path library
// const path = require("path");

// //declare port to connect t0
// const port = 3000;

// //connect to Atlas cluster
// const mongoLogIn = process.env.mongoInfo
// const mongoDB = 'mongodb+srv://'+ mongoLogIn;

// //accessing the connect method of mongoose
// //pass it the name of the DB cluster we have created
// //mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,}, (err, client) => {
//     if(err) return console.error(err);
//     console.log('Connected to database');
//     });
// const db = mongoose.connection;

// //turns on the connection
// db.on('error', console.error.bind(console, 'connection error:'));


// //use the following middleware
// app.use(
//     //middleware for delivering static files
//     express.static(
//         //uses path library to take care of relative paths
//         path.join(__dirname, 'public')));


// app.use(express.urlencoded({ extended: false}))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(methodOverride('_method'))
// app.use(express.json())


// const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, JWT_Secret, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };

//export { authenticateJWT};