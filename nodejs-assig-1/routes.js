const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<body><h1>Assignment 1</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users'){
        
        res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Users</title><head>');
            res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
            res.write('</html>');
            return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(parsedBody);
            fs.writeFile('create-user.txt', username, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }   
};

exports.handler = requestHandler;

