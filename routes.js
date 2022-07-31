const express = require("express")
const router = express.Router()
const Message = require("./models/Message")


router.get("/", async (req, res) => {
    const messages = await Message.find()
        .select("-_id -__v -udpateAt")
        .populate("user", "-_id username")
    res.status(200).render("chat", { messages })
});

module.exports = router;