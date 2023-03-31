const http= require('http');
url= require('url');
http.createServer((req,res)=>{
   
    console.log(req.url);
    var u= url.parse(req.url,true).query;
    console.log(u);
    console.log(u.k);
    console.log(u.r);
    var l = Number(u.k);
    var b = Number(u.r)
    var rect = l*b;
    res.write("Area of the Rectangle is "+rect);
    res.end();
   
}).listen(8080);