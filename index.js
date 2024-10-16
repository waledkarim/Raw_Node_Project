

const http = require('http');

const app = {};

app.config = {
    port: 3000
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening on port: ${app.config.port}`);
    });
};

app.handleReqRes = (req, res) => {
    res.end("Hello Worldd");
};

app.createServer();
