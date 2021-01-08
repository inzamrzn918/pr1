const express = require('express');
const app = express();


const mongoose = require('mongoose');

const classes = require('./api/routes/class');
const indexes = require('./api/routes/home');


// mongoose.connect(
//     "mongodb+srv://inzam918:<"+process.env.MONGO_ATLAS_PASS+"">@graduation-project-1.wmis7.mongodb.net/<dbname>?retryWrites=true&w=majority")
// app.use('/',indexes);
// app.use('/class', classes);

module.exports = app;

