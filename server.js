/*********************************************************************************
*  WEB322 – Assignment 03
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Tyler Hamvas Student ID: 065071128 Date: 2022-06-15
*
*  Heroku App URL: https://fierce-thicket-35179.herokuapp.com/
* 
*  GitHub Repository URL: https://github.com/tahamvas/web322-app

*
********************************************************************************/ 
//Imports
const express = require('express')
const multer = require("multer");
const exphbs = require('express-handlebars');
const stripJs = require('strip-js');
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
const app = express()
const port = process.env.PORT || 8080;
const path = require('path');
const blogservice = require(path.join(__dirname + '/blog-service.js'));
const blogData = require("./blog-service");
//Configuring handlebars
app.engine('.hbs', exphbs.engine({ 
    extname: ".hbs", 
    defaultLayout: "main",
    helpers: {
       navLink: function(url, options){
    return '<li' + 
        ((url == app.locals.activeRoute) ? ' class="active" ' : '') + 
        '><a href="' + url + '">' + options.fn(this) + '</a></li>';
        },
        equal: function (lvalue, rvalue, options) {
            if (arguments.length < 3)
                throw new Error("Handlebars Helper equal needs 2 parameters");
            if (lvalue != rvalue) {
                return options.inverse(this);
            } else {
                return options.fn(this);
            }
        },
        safeHTML: function(context){
            return stripJs(context);
        }
    }
}));
app.set('view engine', '.hbs');
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
//Fixing the nav bar
app.use(function(req,res,next){
    let route = req.path.substring(1);
    app.locals.activeRoute = (route == "/") ? "/" : "/" + route.replace(/\/(.*)/, "");
    app.locals.viewingCategory = req.query.category;
    next();
});

//Routes
app.get('/', (req, res) => {
    res.redirect("/about");
})
app.get('/about', (req, res) => {
    res.render(path.join(__dirname + "/views/about.hbs"));
});
app.get('/posts/add', (req, res) => {
    res.render(path.join(__dirname + "/views/addPost.hbs"));
});
//Provided routes
app.get('/blog/:id', async (req, res) => {

    // Declare an object to store properties for the view
    let viewData = {};

    try{

        // declare empty array to hold "post" objects
        let posts = [];

        // if there's a "category" query, filter the returned posts by category
        if(req.query.category){
            // Obtain the published "posts" by category
            posts = await blogData.getPublishedPostsByCategory(req.query.category);
        }else{
            // Obtain the published "posts"
            posts = await blogData.getPublishedPosts();
        }

        // sort the published posts by postDate
        posts.sort((a,b) => new Date(b.postDate) - new Date(a.postDate));

        // store the "posts" and "post" data in the viewData object (to be passed to the view)
        viewData.posts = posts;

    }catch(err){
        viewData.message = "no results";
    }

    try{
        // Obtain the post by "id"
        console.log(viewData.post);
        viewData.post = await blogData.getPostsById(req.params.id);
        console.log(viewData.post);
    }catch(err){
        viewData.message = "no results"; 
    }

    try{
        // Obtain the full list of "categories"
        let categories = await blogData.getCategories();

        // store the "categories" data in the viewData object (to be passed to the view)
        viewData.categories = categories;
    }catch(err){
        viewData.categoriesMessage = "no results"
    }

    // render the "blog" view with all of the data (viewData)
    res.render("blog", {data: viewData})
});
app.get('/blog', async (req, res) => {  
      // Declare an object to store properties for the view
    let viewData = {};
    try{
        // declare empty array to hold "post" objects
        let posts = [];
        // if there's a "category" query, filter the returned posts by category
        if(req.query.category){
            // Obtain the published "posts" by category
            posts = await blogData.getPublishedPostsByCategory(req.query.category);
        }else{
            // Obtain the published "posts"
            posts = await blogData.getPublishedPosts();
        }
        // sort the published posts by postDate
        posts.sort((a,b) => new Date(b.postDate) - new Date(a.postDate));
        // get the latest post from the front of the list (element 0)
        let post = posts[0]; 
        // store the "posts" and "post" data in the viewData object (to be passed to the view)
        viewData.posts = posts;
        viewData.post = post;

    }catch(err){
        viewData.message = "no results";
    }

    try{
        // Obtain the full list of "categories"
        let categories = await blogData.getCategories();

        // store the "categories" data in the viewData object (to be passed to the view)
        viewData.categories = categories;
    }catch(err){
        viewData.categoriesMessage = "no results"
    }

    // render the "blog" view with all of the data (viewData)
    res.render("blog", {data: viewData})

});

app.get('/post/:value', (req, res) => {
    blogservice.getPostsById(req.params.value).then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message:err});
    });
});+
app.get('/categories', (req, res) => {
    blogservice.getCategories().then(function(data){
        res.render("categories", {categories: data});
        }).catch((err) =>{
            res.render({message: "no results"});
        });
});
app.get('/posts', (req, res) => {
    if (req.query.category){
        blogservice.getPostsByCategory(req.query.category).then(function(data){
            res.render("posts", {posts: data});
        }).catch((err) =>{
            res.render({message: "no results"});
        });
    }
    else if (req.query.minDate){
        blogservice.getPostsByMinDate(req.query.minDate).then(function(data){
            res.render("posts", {posts: data});
        }).catch((err) =>{
            res.render({message: "no results"});
        });
    }
    else
    {
        blogservice.getAllPosts().then(function(data){
            res.render("posts", {posts: data});
        }).catch((err) =>{
            res.render({message: "no results"});
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
app.get( '*', function(req,res) {
    res.render(path.join(__dirname + "/views/404.hbs"));
});
//Listening
blogservice.initialize().then(() => {
    app.listen(port, function(){
        console.log("Express http server listening on  " + port)
    });
}).catch (() => {
    console.log('promises unfulfilled');
});