const WebSocket = require('ws');
const express = require('express')
const app = express()
app.listen(3000, function() {
    console.log('Server started on port 3000');
})

app.use(express.static('public'));
        
const server = new WebSocket.Server({ port: 3200 });

server.on('connection', function(client) {
	client.on('message', function(message) {
		console.log('Here\'s a message from client:' + message);
		client.send(message);
	});
});