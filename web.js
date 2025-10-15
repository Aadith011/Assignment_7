let http = require('http');
let url = require('url');
const fs = require('fs');
const path = require('path');

const websiteRoot = path.join(__dirname, 'public');

http.createServer(function (req, res) {
    let reqPath = req.url === '/' ? '/home.html' : req.url;
    let filepath = path.join(websiteRoot, path.normalize(reqPath));
    let ext = path.extname(filepath).toLowerCase();
    let contentType = '';

    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'application/javascript';
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
