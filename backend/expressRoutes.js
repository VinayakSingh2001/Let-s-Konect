//this is where our express stuff happens
const app = require("./server").app;
app.get("/test", (req, res) => {
  res.json("this is a test route");
});
