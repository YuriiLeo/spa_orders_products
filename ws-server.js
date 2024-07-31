import http from "http";
import { Server } from "socket.io";

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let activeSessions = 0;

io.on("connection", (socket) => {
  activeSessions++;
  io.emit("activeSessions", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.emit("activeSessions", activeSessions);
  });
});

server.listen(4001, () => {
  console.log("WebSocket server listening on port 4001");
});
