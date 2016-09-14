var express = require('express');
var path = require('path');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('server/public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../server/public/views/index.html'));
});

server.listen(3000, function(){
  console.log('server listening on port 3000...');
});
