var express = require('express');


var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function(){
  console.log('server listening on port 3000...');
});
