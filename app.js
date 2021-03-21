const http=require('http');
var dt=require('./myfirstmodule');
var fs=require('fs');


http.createServer(function(req, res){
    res.writeHead(200, {'ContentType': 'text/html'});
    res.write("Hello World\n Today is: "+dt.GiveDate());
    res.write("\nMy name is "+dt.myname());
    res.end("\nKilling the response object here");
}).listen(3000, ()=>{
    console.log('The server is running on port 3000');
});