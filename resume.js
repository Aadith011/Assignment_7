let http = require('http');
let url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    let filepath = (req.url === '/') ? 'resume.html' : '.' + req.url.substring();
    let ext = path.extname(filepath);
    let contentType = '';

    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.end('Error loading file');
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });

}).listen(8080, () => {
    console.log("Server running on port 8080");
});