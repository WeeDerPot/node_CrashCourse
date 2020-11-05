const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
        
        }
        
    )}
    res.write('<h1>Hello Worlds!</h1>')
    res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('A szerver működik...'));