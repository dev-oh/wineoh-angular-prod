var fs = require('fs');
var http = require('http');
// var https = require('https');
// var privateKey  = fs.readFileSync('ssl/private.key', 'utf8');
// var certificate = fs.readFileSync('ssl/server.crt', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
app.use (function (req, res, next) {
    if (req.protocol === 'https') {
        console.log(req.protocol, req.secure);
        next();
    } else {
        console.log('redirected');
        res.redirect('https://' + req.headers.host + req.url);
    }
});
app.use(express.static('./dist'));
app.get('*',(req,res)=>{
	console.log({
		protocol: req.protocol
	});
            res.sendFile(__dirname+'/dist/index.html')
})
var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
httpServer.listen(80);
// httpsServer.listen(443);