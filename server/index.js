const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/api/hello", (req, res) => {
    const name = req.query.name || "world";
  res.send({name});
});

app.get('/api/table',(req,res)=>{
    res.send({names:["Allan","Maya","Aaron"]});
})

app.listen(port, () => console.log(`Listening on port ${port}`));
