const net = require('net');
var client = net.connect({port:9800}, ()=>{
	console.log("server connected!");
	client.write('Hi Bot!\r\n');
}).on('data', (data)=>{
	console.log('server says %s',data.toString());
	client.end();
}).on('end',()=>{
	console.log("server disconnected!");
})
