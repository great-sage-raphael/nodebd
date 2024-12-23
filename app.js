var http = require('http');

var fs= require('fs');
const server=http.createServer(function (req, res) {
    if(req.url==='/'){
        fs.readFile('project.html',function(err,data){
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();

          }) ;
    }
    if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>about page</h2>')
        res.end();
    }
   
})
server.listen(3000,console.log("server is running"));
