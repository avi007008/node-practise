const fs = require('fs');
var readStream = fs.createReadStream('../data.json');
var outStream = fs.createWriteStream('output.json');
readStream.pipe(outStream);
console.log('Program Ended!');