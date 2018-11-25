const express = require('express');
const router = express.Router();
const user_controller = require('../controller/user_controller')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
router.post('/register', (req, res) => {
	
	user_controller.createUser(req.body, (err, result) => {
		
		if (result) {
			let sendata = {
				"status": "success"
			}
			res.send(sendata);
		} else {
			let sendata = {
				"status": "fail"
			}
			res.send(sendata);
		}
	})
});


router.post('/login', (req, res) => {

	user_controller.loginuser(req.body, (err, result) => {
		
const cryptr = new Cryptr('myTotalySecretKey');
		let dcry = cryptr.decrypt(result);
		console.log(dcry)
      if(dcry === res){
		delete result.password
		res.send(result);
	  }
	
	})
});
module.exports = router
