//this is where all our socket server stuff happens here
const io = require("./server").io;

io.on("connection", (socket) => {
  console.log(socket.id, "has connected");
});
