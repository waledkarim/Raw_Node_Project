
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes')

const app = {};

app.config = {
    port: 3000
};

app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening on port: ${app.config.port}`);
    });
};

app.createServer();
