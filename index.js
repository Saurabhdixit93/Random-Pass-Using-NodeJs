const express = require('express');
const port = 5001;
// for layout
const expresslayouts = require('express-ejs-layouts');
// DataBase Connection
const dataBase = require('./configration/mongoose');
const app  = express();
// urlencoding
app.use(express.urlencoded());
//static files uses
app.use(express.static('assets'));
//layouts change
app.use(expresslayouts);
//extract styles and scripts from sub pages
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);

//set view engine
app.set('view engine','ejs');
app.set('views','./viewfiles');

//Using Express Router For routing all access
app.use('/',require('./routes'));
//server Check
app.listen(port,function(err){
    if(err){
        console.log('Error to Connecting the server');
        return;
    }
    console.log('Successfull Connected With the Port:',port);
});