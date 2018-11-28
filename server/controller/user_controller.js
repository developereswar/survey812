var dbconfig = require("../config/config");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var user_controller = {
    createUser(userdata, callback) {
        console.log(userdata)
        let encryptPassword = cryptr.encrypt(userdata.password);
        userdata.password = encryptPassword;
        delete userdata.cpassword;
        let getAllPosts = 'INSERT INTO register SET ?';
        return dbconfig.query(getAllPosts, userdata, callback);

    },
    loginuser(userdata, callback) {
        let error = {
            "status": "failure",
            "message": "Invalid Username && Password"
        }
        let userQuery;
        if (userdata.email) {
            userQuery = "SELECT * FROM register WHERE email=?";
        }
        if (userdata.username) {
            userQuery = "SELECT * FROM register WHERE username=?";
        }
        dbconfig.query(userQuery, [userdata.email], (err, rows, fields) => {
            if (err)
            return callback(null, error)
            if(rows){
                var resultArray = Object.values(JSON.parse(JSON.stringify(rows)))
                // console.log(resultArray)
                let storedPassword = resultArray[0].password;
                let decryptPassword = cryptr.decrypt(storedPassword)
               if(decryptPassword === userdata.password){
                   callback(error, resultArray);
               }
            }

        });
    }
}


module.exports = user_controller;

