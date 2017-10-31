// http is part of core. We need it to run createServer
var http = require('http');
// We need to bring in the Express module so we can use the router, public folder, etc
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!')
})

//run createServer aginst http like always, but hand it the app(express)
var server = http.createServer(app);
server.listen(8080);
console.log("the server is lisenting on port 8080");