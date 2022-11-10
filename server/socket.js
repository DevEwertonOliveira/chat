const io = require("socket.io");

const socket = io.on("connection", (socket) => {
  console.log("Novo usuário conectado!", socket.id);

  socket.on("new-connection", (data) => {
    console.log("novo evento de conexão recebido", data);

    users[socket.id] = data.username;
    console.log("usuarios: ", users);

    socket.emit("welcome-message", {
      user: "server",
      message: `Bem vindo ${data.username}`,
    });
  });

  socket.on("new-message", (data) => {
    console.log(`nova mensagem de ${data.user}`);

    socket.broadcast.emit("broadcast-message"),
      {
        user: users[data.user],
        message: data.message,
      };
  });
});

module.exports = socket;
