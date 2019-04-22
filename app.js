const http = require('http');
const express = require('express');
// const mongodbCon = require('./config/database'); //database configuration
const app = express();

app.get('/', function(req, res){
	res.json({"tutorial" : "Build REST API with node.js"});
});

app.listen(3000, function(){
	console.log('Node server listening on port 3000');
});