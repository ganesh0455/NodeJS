const http = require('http');
const fs = require('fs');

function requestListener(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head>');
        res.write('<title>My first Page</title>');
        res.write('</head>')
        res.write('<body><form action="/message" method="POST" ><input type="text" name="enteredMessage" /><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            // console.log("chunk = ", chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log("parsedBody = ", parsedBody); O/p: enteredMessage = Ganesh,  here the enteredMessage is given in input field's name
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.text', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>My first Page</title>');
    res.write('</head>')
    res.write('<body><h1>Hello NodeJS!</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();
}

const server = http.createServer(requestListener);


// const server = http.createServer(function(req, res){
//     console.log(req)
// });

server.listen(2001);