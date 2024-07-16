const http = require('http');

function requestListener(req, res) {
    console.log("req = ", req);
    console.log("req.url = ", req.url);
    console.log("req.method = ", req.method);
    console.log("req.headers = ", req.headers);

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