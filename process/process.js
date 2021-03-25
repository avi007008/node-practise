const cexec = require('child_process');
console.log("process id: %s",process.pid);
cexec.exec('mybat.bat',(err,stdout,stderr)=>{
	if(err){
		console.error(err);
		return;
	}
	console.log(stdout);
})	