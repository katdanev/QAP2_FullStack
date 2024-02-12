const http = require('http');
const fs = require('fs');
global.DEBUG = true;

const server = http.createServer((req, res) => {
    if (DEBUG) console.log('req.url:', req.url);
    switch (req.url) {
        
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to the main page! </h1>');
            break;

         case '/about':
             res.writeHead(200, { 'Content-Type': 'text/html' });
             res.end('<h1>Welcome to the about page! </h1>');
            break;

        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to the contact page! </h1>');
            break;
    
        case '/products':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to the products page! </h1>');
            break;

        case '/subscribe':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to the subscribe page! </h1>');
            break;   

        case '/news':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to the news page! </h1>');
            break;       
    
        case '/weather':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to the weather page! </h1>');
            break;       

               
     
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);
