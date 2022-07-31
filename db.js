const mongoose = require("mongoose")

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);

        mongoose.connection.on("error", (error) => {
            console.log("Error mientras se tenia conexion con la base de datos")
        });

        console.log("conect to DB")

    } catch (error) {
        console.error("Error al iniciar conexion con la base de datos.", error);
    }
}