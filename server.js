/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Tyler Hamvas Student ID: 065071128 Date: 2022-06-01
*
*  Online (Heroku) URL: https://tranquil-mesa-39327.herokuapp.com/
*
*  GitHub Repository URL: https://github.com/tahamvas/web322-app
*
********************************************************************************/ 
//Imports
const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const path = require('path');
const blogservice = require(path.join(__dirname + '/blog-service.js'));
//For CSS
app.use(express.static('public')); 
//Routes
app.get('/', (req, res) => {
    res.redirect("/about");
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/about.html"));
});
app.get('/blog', (req, res) => {
    blogservice.getPublishedPosts().then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message:err});
    });
});
app.get('/posts', (req, res) => {
    blogservice.getAllPosts().then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message:err});
    });
});
app.get('/categories', (req, res) => {
    blogservice.getCategories().then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message:err});
    });
});
app.get( '*', function(req,res) {
    res.status(404).send("Page Not Found");
});
//Listening
blogservice.initialize().then(() => {
    app.listen(port, function(){
        console.log("Express http server listening on  " + port)
    });
}).catch (() => {
    console.log('promises unfulfilled');
});