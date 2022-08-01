const socketIO = require("socket.io")
const Message = require("./models/Message")
const User = require("./models/User")




async function setUsername(username) {
    return await User.findOneAndUpdate(
        { username },
        { username },
        { upsert: true, new: true })
}

async function storeMessage(msg, username) {
    const message = await Message.create({
        text: msg,
    });

    // asociar mensaje al usuario
    const user = await User.findOneAndUpdate(
        { username: username },
        { $push: { messages: message.id } },
        { upsert: true, new: true }
    );

    // asociar usuario al mensaje
    message.user = user.id;
    await message.save()


    const messagePopulated = await message
        .populate("user", "-_id username")
    console.log(messagePopulated)
    return messagePopulated
}



module.exports = (server) => {
    const io = socketIO(server, {
        cors: {
            origin: "*",
            methods: ["*"]
        }
    });

    io.on("connection", (socket) => {
        console.log("conectado: " + socket.id)

        socket.on("disconnect", () => console.log(socket.username + " se ha desconectado"))

        socket.on("set-username", async (username) => {
            try {
                const user = await setUsername(username)

                // Agregamos una propiedad al socket para guardar el nombre de usuario

                socket.username = user.username
                socket.emit("set-username-ok", user.username);
                console.log(user.username)
            } catch (error) {
                socket.emit("set-username-error", error.message);
            }
        })

        socket.on("new-message", async (msg) => {
            try {
                // crear el mensaje
                const messagePopulated = await storeMessage(msg, socket.username);
                io.emit("new-message-ok", messagePopulated);

            } catch (error) {
                socket.emit("new-message-error", error.message);
            }
        })
    })
}