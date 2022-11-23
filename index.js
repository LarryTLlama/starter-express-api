const http = require('http'),
      httpProxy = require('http-proxy');

httpProxy.createProxyServer().listen(process.env.PORT || 3000);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end()
})