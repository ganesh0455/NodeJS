const http = require('http');

function requestListener(req, res) {
    console.log(req);
}

const server = http.createServer(requestListener);


// const server = http.createServer(function(req, res){
//     console.log(req)
// });

server.listen(2001);