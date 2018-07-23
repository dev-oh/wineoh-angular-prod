var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('ssl/private.key', 'utf8');
var certificate = fs.readFileSync('ssl/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
app.use(express.static('./dist'));
app.get('*',(req,res)=>{
            res.sendFile(__dirname+'/dist/index.html')
})
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(80);
httpsServer.listen(443);