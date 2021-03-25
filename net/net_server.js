const net = require('net');
var server = net.createServer((socket)=>{
	socket.end('Hello Friend!');
}).on('error', (err)=>{
	console.error(err);
	throw err;
});

server.listen('9800',()=>{
	address = server.address();
	console.log('opened server on %j', address);
});