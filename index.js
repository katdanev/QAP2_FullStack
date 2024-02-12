const http = require('http');
const fs = require('fs');
global.DEBUG = true;

const server = http.createServer((req, res) => {
    if (DEBUG) console.log('req.url:', req.url);
    switch (req.url) {
        
        case '/':
           
                // Read file index.html
                fs.readFile('./views/index.html', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Internal Server Error');
                        return;
                    }
    
                    // Add header and send file 
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                });
                break;

         case '/about':
                 fs.readFile('./views/about.html', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Internal Server Error');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                });
                break;

        case '/contact':
            fs.readFile('./views/contact.html', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            break;

    
        case '/products':
            fs.readFile('./views/products.html', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            break;    

        case '/subscribe':
            fs.readFile('./views/subscribe.html', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            break;      

        case '/news':
            fs.readFile('./views/news.html', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            break;    
    
        case '/workshops':
            fs.readFile('./views/workshops.html', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            break;       

            default:
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Page not found</h1>');
                break;

               
     
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);
