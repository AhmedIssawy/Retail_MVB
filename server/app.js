const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('').then(()=>{
  app.listen(port,()=>{
    console.log('Express server listening on port ' + port);
  })
}).catch(()=>{
  console.error("Error connecting to server: ", err);
})


module.exports = app;
