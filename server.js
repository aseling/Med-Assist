const express = require('express'),
  path = require('path');

const app = express();

app.use(express.static('./dist/med-assist'));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/med-assist/index.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, console.log("Listening on port 3000"));

