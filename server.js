var express = require("express")
var app = express();

app.get('/:path', function (req, res) {
  res.send(req.params.path);
});

app.listen(8080, function () {
  console.log('The app listening on port 8080!');
});