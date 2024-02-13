// read Readme.md for scenario description

const http = require('http');
const fs = require('fs');
global.DEBUG = true;


const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

const server = http.createServer((req, res) => {
    // DEBUG is a global variable, if true, log the requested URL
    if (DEBUG) console.log('req.url:', req.url);

    switch (req.url) {
        case '/':
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

                // Emit the event for route accessed and file read
                myEmitter.emit('routeAccessed', '/');
                myEmitter.emit('fileRead', 'index.html');
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

                myEmitter.emit('routeAccessed', '/about');
                myEmitter.emit('fileRead', 'about.html');
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

                myEmitter.emit('routeAccessed', '/contact');
                myEmitter.emit('fileRead', 'contact.html');
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

                myEmitter.emit('routeAccessed', '/products');
                myEmitter.emit('fileRead', 'products.html');
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

                myEmitter.emit('routeAccessed', '/subscribe');
                myEmitter.emit('fileRead', 'subscribe.html');
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

                myEmitter.emit('routeAccessed', '/news');
                myEmitter.emit('fileRead', 'news.html');
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

                myEmitter.emit('routeAccessed', '/workshops');
                myEmitter.emit('fileRead', 'workshops.html');
            });
            break;

        default:

            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Page not found</h1>');
            break;
    }
});

// Event listener for routeAccessed
myEmitter.on('routeAccessed', (route) => {
    console.log(`Route ${route} was accessed.`);
});

// Event listener for fileRead
myEmitter.on('fileRead', (file) => {
    console.log(`File ${file} was successfully read.`);
});



// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});



// code from Task 2

// const http = require('http');
// const fs = require('fs');
// global.DEBUG = true;

// const server = http.createServer((req, res) => {
//     if (DEBUG) console.log('req.url:', req.url);
//     switch (req.url) {
        
//         case '/':
           
//                 // Read file index.html
//                 fs.readFile('./views/index.html', 'utf8', (err, data) => {
//                     if (err) {
//                         console.error(err);
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Internal Server Error');
//                         return;
//                     }
    
//                     // Add header and send file 
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 });
//                 break;

//          case '/about':
//                  fs.readFile('./views/about.html', 'utf8', (err, data) => {
//                     if (err) {
//                         console.error(err);
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Internal Server Error');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 });
//                 break;

//         case '/contact':
//             fs.readFile('./views/contact.html', 'utf8', (err, data) => {
//                 if (err) {
//                     console.error(err);
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.end('Internal Server Error');
//                     return;
//                 }
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             });
//             break;

    
//         case '/products':
//             fs.readFile('./views/products.html', 'utf8', (err, data) => {
//                 if (err) {
//                     console.error(err);
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.end('Internal Server Error');
//                     return;
//                 }
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             });
//             break;    

//         case '/subscribe':
//             fs.readFile('./views/subscribe.html', 'utf8', (err, data) => {
//                 if (err) {
//                     console.error(err);
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.end('Internal Server Error');
//                     return;
//                 }
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             });
//             break;      

//         case '/news':
//             fs.readFile('./views/news.html', 'utf8', (err, data) => {
//                 if (err) {
//                     console.error(err);
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.end('Internal Server Error');
//                     return;
//                 }
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             });
//             break;    
    
//         case '/workshops':
//             fs.readFile('./views/workshops.html', 'utf8', (err, data) => {
//                 if (err) {
//                     console.error(err);
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.end('Internal Server Error');
//                     return;
//                 }
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             });
//             break;       

//             default:
//                 res.writeHead(404, { 'Content-Type': 'text/html' });
//                 res.end('<h1>Page not found</h1>');
//                 break;

               
     
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// }
// );
