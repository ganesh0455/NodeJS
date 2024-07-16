const http = require('http');

const appRoutes = require('./routes');

console.log(appRoutes.someText);

const server = http.createServer(appRoutes.hanlder);


// const server = http.createServer(function(req, res){
//     console.log(req)
// });

server.listen(2001);