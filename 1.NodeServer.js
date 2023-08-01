const http = require('http');
const port = 3000
const host = 'localhost'

const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hello, World!")
});

server.listen(port, host, () => {
    console.log(`Server listening on ${port}`);
})