const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const path = require('path');
const blogservice = require(path.join(__dirname + '/blog-service.js'));
const pnf = "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_44/1501338/it-movie-scared-today-main-191031.jpg"
//CSS
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
    res.sendFile(path.join(__dirname + "/data/posts.json"));
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