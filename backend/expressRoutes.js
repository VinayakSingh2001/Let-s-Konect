//this is where our express stuff happens
const app = require("./server").app;
const jwt = require("jsonwebtoken");
const linkSecret = "jbkjcnsdlkcmslcmsdc";

app.get("/user-link", (req, res) => {
  const appData = {
    professionalsFullName: "Robert Down, J.D",
    appointmentDate: Date.now(),
  };

  //we need to encode this data into a token
  const token = jwt.sign(appData, linkSecret);
  res.send("https://localhost:3000/join-video?token=" + token);

  //   res.json("This is a test route");
});

app.get("/validate-link", (req, res) => {
  const token = req.query.token;
  const decodedData = jwt.verify(token, linkSecret);
  res.json(decodedData);
});
