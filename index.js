const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const errMessage = `Error loading ${req.url}`;

  if (req.url === "/") {
    fs.readFile("./index.html", function (err, data) {
      if (err) {
        res.writeHead(500);
        res.end(errMessage);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./about.html", function (err, data) {
      if (err) {
        res.writeHead(500);
        res.end(errMessage);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("./contact-me.html", function (err, data) {
      if (err) {
        res.writeHead(500);
        res.end(errMessage);
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.readFile("./404.html", function (err, data) {
      if (err) {
        res.writeHead(500);
        res.end(errMessage);
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT);
