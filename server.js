/*********************************************************************************
*  WEB322 – Assignment 03
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Tyler Hamvas Student ID: 065071128 Date: 2022-06-15
*
*  Online (Heroku) URL: https://tranquil-mesa-39327.herokuapp.com/
*
*  GitHub Repository URL: https://github.com/tahamvas/web322-app
*
********************************************************************************/ 
//Imports
const express = require('express')
const multer = require("multer");
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
const app = express()
const port = process.env.PORT || 8080;
const path = require('path');
const blogservice = require(path.join(__dirname + '/blog-service.js'));
//Set cloudinary config
cloudinary.config({
    cloud_name: 'dwxcjemur',
    api_key: '883134136537526',
    api_secret: 'GikYkfToszj8iJa893ogefg2hGA',
    secure: true
});
//Empty upload variable
const upload = multer(); 
//For CSS
app.use(express.static('public')); 
//Routes
app.get('/', (req, res) => {
    res.redirect("/about");
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/about.html"));
});
app.get('/posts/add', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/addPost.html"));
});
app.get('/blog', (req, res) => {
    blogservice.getPublishedPosts().then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message:err});
    });
});
app.get('/post/:value', (req, res) => {
    blogservice.getPostsById(req.params.value).then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message:err});
    });
});
app.get('/posts', (req, res) => {
    if (req.query.category){
        blogservice.getPostsByCategory(req.query.category).then(function(data){
            res.json(data);
        }).catch(function(err){
            res.json({message:err});
        });
    }
    else if (req.query.minDate){
        blogservice.getPostsByMinDate(req.query.minDate).then(function(data){
            res.json(data);
        }).catch(function(err){
            res.json({message:err});
        });
    }
    else
    {
        blogservice.getAllPosts().then(function(data){
            res.json(data);
        }).catch(function(err){
            res.json({message:err});
        });
    }
});


app.post('/posts/add', upload.single("featureImage"), (req, res) => {
    if(req.file){
        let streamUpload = (req) => {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                    (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    }
                );
                streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
        };
        async function upload(req) {
            let result = await streamUpload(req);
            console.log(result);
            return result;
        }
        upload(req).then((uploaded)=>{
            processPost(uploaded.url);
        });
    }else{
        processPost("");
    }
    function processPost(imageUrl){
        req.body.featureImage = imageUrl;
        // TODO: Process the req.body and add it as a new Blog Post before redirecting to /posts
        blogservice.addPost(req.body).then(() =>{
            res.redirect("/posts");
        })
    }     
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