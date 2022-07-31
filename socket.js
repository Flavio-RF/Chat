const socketIO = require("socket.io")
const messages = require("./models/Message")
const users = require("./models/User")








module.exports = (server) => {
    const io = socketIO(server, {
        cors: {
            origin: "*",
            methods: ["*"]
        }
    });

    io.on("connection", (socket) => {
        console.log("conectado: " + socket.id)

        socket.on("disconnect: ", () => console.log("descontado" + socket.id))

    })
}