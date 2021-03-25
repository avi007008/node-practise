const os=require('os');
const fs=require('fs');
var l = (a)=>{
	console.log(a);
}

l('----Getting file system details----')

l(`Path: ${__dirname}`);

l(`File: ${__filename}`);

l('----Getting OS details-------------')
l('Free space: '+ os.freemem()/1024/1024/1024);
l(`OS type: ${os.type()}`)

l('---Getting mons -------------------')
fs.readFile('data.json', (data)=>{
	l(data);
})
