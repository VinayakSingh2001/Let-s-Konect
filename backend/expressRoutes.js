//here all our express stuff happens (routes)
const app = require("./server").app;
const jwt = require("jsonwebtoken");
const linkSecret = "jbkjcnsdlkcmslcmsdc";

//this route is for us!
app.get("/user-link", (req, res) => {
  //data for the end-user's appt
  const apptData = {
    professionalsFullName: "Robert Down, J.D",
    appointmentDate: Date.now(),
  };

  //we need to encode this data in a token
  const token = jwt.sign(apptData, linkSecret);
  res.send("https://localhost:3000/join-video?token=" + token);

  //   res.json("this is a route");
});

app.get("/validate-link", (req, res) => {
  const token = req.query.token;
  const decodedData = jwt.verify(token, linkSecret);
  res.json(decodedData);
});
