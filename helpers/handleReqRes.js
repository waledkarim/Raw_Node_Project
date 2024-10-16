

const url = require('url');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler')



handler.handleReqRes = (req, res) => {
    console.log("handleReqRes invoked");
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const trimmedPath = pathName.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    const requestProperties = {
        parsedUrl,
        pathName,
        trimmedPath,
        method,
        queryStringObject,
        headerObject
    };

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode === typeof(statusCode) === "number" ? statusCode : 500;
        payload = typeof(payload) === "object" ? payload : {};
    })

    req.on('data', (buffer) => {
        console.log(buffer.toString());
    });

    res.end("Hello Worldd");
};



module.exports = handler;