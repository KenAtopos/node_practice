const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Ken");
});

myEmitter.on("newSale", (stock) => {
  console.log(`${stock}`);
});

myEmitter.emit("newSale", 9);

///////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received");
  res.end("request received");
});

server.on("request", (req, res) => {
  console.log("another request");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "localhost", () => console.log("waiting for request"));
