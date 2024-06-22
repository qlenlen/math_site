const express = require('express');


const app = express();
app.use(express.static("public"))

app.get('/', function (req, res) {
  res.redirect("/main.html");
});

app.listen(1500, () => {
  console.log('Server is running on port 1500');
});