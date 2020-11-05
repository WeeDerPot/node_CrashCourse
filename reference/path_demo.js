const path = require('path');
const fs = require('fs');
// create folder
/*fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
    if (err) throw err;
    console.log('folder created...');
});*/
// create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err =>{
    if (err) throw err;
    console.log('File created...');
});

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', err =>{
    if (err) throw err;
    console.log('File appended to...');
});


/*console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));


console.log(path.join(__dirname, 'test' , 'hello.html'));*/
