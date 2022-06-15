//Importing fs + declaring global array variables
const fs = require("fs"); 
var posts = [];
var categories = [];
//Exporting functions for use in server.js
exports.initialize = () => {
    //Attempt to read posts.json
    fs.readFile('./data/posts.json', 'utf8', (err, data) => {
        if (err) throw err;
        posts = JSON.parse(data);
        //If successful, load categories.json
        fs.readFile('./data/categories.json', 'utf8', (err, data) => {
            if (err) throw err;
            categories = JSON.parse(data);
        });
    });
    //Return promise based on success or error in above file reads
    return new Promise((resolve, reject) => {
        resolve("Files Read Successfully!");
        reject("Failed to Load Files!");
    });
};
exports.getAllPosts = () => {
    return new Promise((resolve, reject) => {
        if (posts.length > 0)
        resolve(posts);
        else
        reject("No results returned");
    });
}
exports.getPublishedPosts = () => {
    return new Promise((resolve, reject) => {
        //Temporary array to hold published posts
        var tempPosts = [];
        var k = 0;
        //Loop through array to find published posts
        for (var i = 0; i < posts.length; i++){
            if (posts[i].published == true){
                tempPosts[k] = posts[i];
                k++;
            }
        }
        //True if more than 0 posts are published
        if (tempPosts.length > 0)
        resolve(tempPosts);
        else
        reject("No results returned");
    });
}
exports.getPostsByCategory = (value) => {
    
    return new Promise((resolve, reject) => {
            //Temporary array to hold published posts
            var tempPosts = [];
            var k = 0;
            //Loop through array to find published posts
            for (var i = 0; i < posts.length; i++){
                if (posts[i].category == value){
                    tempPosts[k] = posts[i];
                        k++;
               }
         }
        //True if more than 0 posts are published
        if (tempPosts.length > 0)
        resolve(tempPosts);
        else
        reject("No results returned");
    });
}
exports.getPostsByMinDate = (minDateStr) => {
    return new Promise((resolve, reject) => {
        //Temporary array to hold published posts
        var tempPosts = [];
        var k = 0;
        //Loop through array to find published posts
        for (var i = 0; i < posts.length; i++){
            if (new Date(posts[i].postDate) >= new Date(minDateStr)){
                tempPosts[k] = posts[i];
                k++;
            }
        }
        //True if more than 0 posts are published
        if (tempPosts.length > 0)
        resolve(tempPosts);
        else
        reject("No results returned");
    });
}
exports.getPostsById = (id) => {
    return new Promise((resolve, reject) => {
        //Temporary array to hold published posts
        var tempPosts = [];
        var k = 0;
        //Loop through array to find published posts
        for (var i = 0; i < posts.length; i++){
            if (posts[i].id == id){
                tempPosts[k] = posts[i];
                k++;
            }
        }
        //True if more than 0 posts are published
        if (tempPosts.length > 0)
        resolve(tempPosts);
        else
        reject("No results returned");
    });
}
exports.getCategories = () => {
    return new Promise((resolve, reject) => {
        if (categories.length > 0)
        resolve(categories);
        else
        reject("No results returned");
    });
}
exports.addPost = (postData) => {
            if (postData.published == undefined){
                postData.published = false;
            }
            else{
                postData.published = true;
            }
            postData.id = posts.length + 1;
            posts.push(postData);
            return new Promise((resolve, reject) => {
            if (posts.length > 0)
            resolve(posts);
            else
            reject("Unable to add post");
        });
}