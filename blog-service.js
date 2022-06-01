const fs = require("fs"); 

var posts = [];
var categories = [];

exports.initialize = () => {
fs.readFile('./data/posts.json', 'utf8', (err, data) => {
    if (err) throw err;
    posts = JSON.parse(data);
});
fs.readFile('./data/categories.json', 'utf8', (err, data) => {
    if (err) throw err;
    categories = JSON.parse(data);
});
return new Promise((resolve, reject) => {
    resolve("Success");
    reject("Failure");
});
};

exports.getAllPosts = () => {
    return new Promise((resolve, reject) => {
        if (posts.length > 0)
        resolve(posts);
        else
        reject("no results returned");
    });
}

exports.getPublishedPosts = () => {
    return new Promise((resolve, reject) => {
        var tempPosts = [];
        var k = 0;
        for (var i = 0; i < posts.length; i++){
            if (posts[i].published == true){
                tempPosts[k] = posts[i];
                k++;
            }
        }
        if (tempPosts.length > 0)
        resolve(tempPosts);
        else
        reject("no results returned");
    });
}

exports.getCategories = () => {
    return new Promise((resolve, reject) => {
        if (categories.length > 0)
        resolve(categories);
        else
        reject("no results returned");
    });
}