const userModel = require('../models/users');
const jwt = require('jsonwebtoken');			

module.exports = {
	create: function(req, res, next) {
		
		userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "User added successfully!!!", data: null});
				  
				});
	},

	getAll: function(req, res, next) {
		let usersList = [];

		userModel.find({}, function(err, users){
			if (err){
				next(err);
			} else{
				for (let user of users) {
					usersList.push({id: user._id, name: user.name, password: user.password});
				}
				res.json({status:"success", message: "Users list found!!!", data:{user: usersList}});
							
			}

		});
	},

}					