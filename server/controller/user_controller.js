var dbconfig = require("../config/config");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var user_controller = {
    createUser(userdata, callback) {
        let encryptPassword = cryptr.encrypt(userdata.password);
        userdata.password = encryptPassword;
        delete userdata.cpassword;
        let getAllPosts = 'INSERT INTO register SET ?';
        return dbconfig.query(getAllPosts, userdata, callback);

    },
    loginuser(userdata, callback) {
  
        let userQuery;
        if(userdata.email){
            userQuery = "SELECT * FROM register WHERE email=?"; }
        if(userdata.username){
            userQuery= "SELECT * FROM register WHERE username=?"; 
        }
        return dbconfig.query(userQuery, [userdata.email], callback);
    }
}


module.exports = user_controller;

