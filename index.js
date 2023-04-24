import { createServer } from "http";
import express from "express";
import createBareServer from "@tomphttp/bare-server-node";
const app = express();
const server = createServer();
const bare = createBareServer('/bare/', {blockLocal: false})
app.use(express.static("public"));
server.on("request", (req, res) => {
    if(bare.shouldRoute(req)) {
        bare.routeRequest(req, res);

    } else {
        app(req, res);
    }
});
server.on("upgrade", (req, socket, head) => {
    if(bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});
console.log("Starting on port: " + Number(3000 + Number(process.env.NODE_APP_INSTANCE)))
server.listen({
    port: Number(3000 + Number(process.env.NODE_APP_INSTANCE)),
});




