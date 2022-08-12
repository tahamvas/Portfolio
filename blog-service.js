const Sequelize = require('sequelize');
var sequelize = new Sequelize('d37qt9qbs8p49j', 'rceffscqbeumpy', 'f151d61682f869b0bbeb4228ff4f4bbc607f49febdbfbc8561239bf8e87176bc', {
    host: 'ec2-34-235-198-25.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});
const Post = sequelize.define('post', {
    body: Sequelize.TEXT,
    title: Sequelize.STRING,
    postDate: Sequelize.DATE,
    featureImage: Sequelize.STRING,
    published: Sequelize.BOOLEAN
});
const Category = sequelize.define('category', {
    category: Sequelize.STRING
});
Post.associate = () =>{
    Post.belongsTo(Category, {foreignKey: 'category'});
    return Post;
};
//Exporting functions for use in server.js
exports.initialize = () => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
        .then(resolve('Successful sync'))
        .catch(reject("unable to sync the database"));
});
};
exports.getAllPosts = () => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
        .then(resolve(Post.findAll()))
        .catch(reject("no results returned"));
});
};
exports.getCategories = () => {
    return new Promise((resolve, reject) => {
        Category.findAll()
        .then(data => {
            resolve(data)})
        .catch(err => {reject(err)});
});
}
exports.getPublishedPosts = () => {
    return new Promise((resolve, reject) => {
        Post.findAll({
            where:{
                published: true
            }
        })
        .then(resolve(Post.findAll()))
        .catch(reject("no results returned"));
});
};
exports.getPublishedPostsByCategory = (value) => {
    return new Promise((resolve, reject) => {
        Post.findAll({
            where:{
                category: value,
                published: true
            }
        })
        .then(resolve(Post.findAll({where: {category : value, published: true}})))
        .catch(reject("no results returned"));
});

}
exports.getPostsByCategory = (value) => {
    return new Promise((resolve, reject) => {
        Post.findAll({
            where:{
                category: value
            }
        })
        .then(resolve(Post.findAll({where: {category: value}})))
        .catch(reject("no results returned"));
});
}
exports.getPostsByMinDate = (minDateStr) => {
    return new Promise((resolve, reject) => {
        const { gte } = Sequelize.Op;
            Post.findAll({
                where: {
                    postDate: {
                        [gte]: new Date(minDateStr)
                    }
                }
            })
        .then(resolve(Post.findAll({where: {postDate:{[gte]: new Date(minDateStr)}}})))
        .catch(reject("no results returned"));
});
}
exports.getPostsById = (value) => {
    return new Promise((resolve, reject) => {
        Post.findAll({
            where:{
                id: value
            }
        })
        .then(data => resolve(data))
        .catch(reject("no results returned"));
});

}

exports.addPost = (postData) => {
    return new Promise((resolve, reject) => {
        date = new Date();
        postData.published = (postData.published) ? true : false;
        postData.postDate = date;
        for (var i in postData){
            if (postData[i].title == ""){postData[i].title = null;}
            if (postData[i].body == ""){postData[i].body = null;}
            if (postData[i].featureImage == ""){postData[i].featureImage = null;}
        }
        Post.create(postData)
        .then(resolve(Post.findAll()))
        .catch(reject("unable to create post"));
    })
};

exports.addCategory = (categoryData) =>{
    return new Promise((resolve, reject) => {
        for (var i in categoryData){
            if (categoryData[i] == ""){categoryData[i] = null;}
        }
        Category.create(categoryData)
        .then(resolve("Success"))
        .catch(reject("unable to create category"));
    })
};
exports.deleteCategoryById = (v) =>{
    return new Promise((resolve, reject) => {
        Category.destroy({
            where: {
                id: v
            }
        })
        .then(resolve(Category.findAll()))
        .catch(reject("unable to delete category"));
    })
};
exports.deletePostById = (v) =>{
    return new Promise((resolve, reject) => {
        Post.destroy({
            where: {
                id: v
            }
        })
        .then(resolve())
        .catch(reject("unable to delete post"));
    })
};