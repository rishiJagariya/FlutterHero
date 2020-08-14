const express = require('express');
const app = express();
const cookies = require('cookies');

app.set('view engine', 'ejs')

// app.use('/public',express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/views'));


app.get('/', (req,res)=>{
    res.render('Main.ejs');
});

app.get('/Get-Started',(req,res)=>{
    res.render('Posts.ejs');
});

app.get('/Blog',(req,res)=>{
    res.render('Blogs.ejs');
});

app.listen('3000',()=>{
    console.log("Welcome to server");
});