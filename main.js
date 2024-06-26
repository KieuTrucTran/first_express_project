"use strict"
const port = 3000,
express = require("express"),
app = express();

app.post("/contact", (req, res) => {
  res.send("Contact information submitted successfully.");
});

app.get("/", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.url);
  console.log(req.query);
  res.send("Hello, Universe!");
})
.listen(port, () => {
  console.log(`The Express.js server has started and is listening on port number: ${port}`);
});
