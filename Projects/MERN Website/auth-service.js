var mongoose = require("mongoose");
const bCrypt = require("bcryptjs");
var Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://Tyler:test@senecaweb.ryufyim.mongodb.net/web322_week8");

var userSchema = new Schema({
    "userName":  {
        "type": String,
        "unique": true
    },
    "password": String,
    "email": String,
    "loginHistory": [{
      "dateTime": Date,
      "userAgent": String
    }],
  });

  let User;

  module.exports.initialize = function () {
    return new Promise(function (resolve, reject) {
        let db = mongoose.createConnection("mongodb+srv://Tyler:test@senecaweb.ryufyim.mongodb.net/web322_week8");
        db.on('error', (err)=>{
            reject(err); // reject the promise with the provided error
        });
        db.once('open', ()=>{
           User = db.model("users", userSchema);
           resolve();
        });
    });
};

module.exports.registerUser = (userData) => {
  return new Promise((resolve, reject) => {
        if (userData.password != userData.password2){
            reject("Passwords do not match");
        }
        else{
                bCrypt.hash(userData.password, 10).then(hash =>{
                        userData.password = hash;
                        let newUser = new User(userData);i
                        newUser.save((err) =>{
                        if (err) {
                            if (err.code == 11000){
                               reject("User Name already taken")
                            }
                            else{
                             reject("There was an error creating the user: " + err);
                            }
                        }
                        else {
                            resolve();
                            }
                        })
                    }).catch(err=>{
                        console.log(err);
                    });
            }
        })
};

module.exports.checkUser = (userData) =>{
    return new Promise((resolve, reject) => {
        User.find({userName: userData.userName}).exec().then((users) => {
            if (users.length == 0){
                reject("Unable to find user: " + userData.userName);
            }
            else{
                bCrypt.compare(userData.password, users[0].password).then((res) => {
                if (res === true) {
                    users[0].loginHistory.push({dateTime: (new Date()).toString(), userAgent: userData.userAgent});
                    User.update(
                        {userName: users[0].userName},
                        {$set: { loginHistory: users[0].loginHistory} },
                        {multi: false}
                    ).exec().then((() => {
                        resolve(users[0]);
                    })).catch((err) => {
                        reject("Unable to find user: " + userData.userName);
                    });
                }
                else if (res === false){
                    reject("Incorrect password for user: " + userData.userName);
                }
                else{
                    reject("Unable to find user: " + userData.userName);
                }}).catch((err) => {
                    reject("err: " + err);
                })
            }
        });
  });
};