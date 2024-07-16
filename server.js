const http = require('http');

function requestListener(req, res) {
    console.log("req = ", req);
    console.log("req.url = ", req.url);
    console.log("req.method = ", req.method);
    console.log("req.headers = ", req.headers);
    // process.exit();
}

const server = http.createServer(requestListener);


// const server = http.createServer(function(req, res){
//     console.log(req)
// });

server.listen(2001);