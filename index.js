var express = require('express');
var app = express();
var compression = require ('compression');

app.use(compression());
app.use(express.static(__dirname + '/public'));



var port = process.env.PORT || 3001;


app.listen(port);

console.log("Run on http://localhost:" + port + "/");
