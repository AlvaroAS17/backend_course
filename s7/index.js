console.log("eight days a week hey jude love me do paul");
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hola Mundo!");
});

app.listen(3000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});