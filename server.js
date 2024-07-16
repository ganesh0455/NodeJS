const http = require('http');

function requestListener(req, res) {
    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head>');
        res.write('<title>My first Page</title>');
        res.write('</head>')
        res.write('<body><form action="message" method="POST" ><input type="text" name="enteredMessage" /><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
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