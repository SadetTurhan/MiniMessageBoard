const express = require("express")
const router = express.Router()
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];
router.get("/",(req,res) =>{
    res.render("index", { title: "Mini Messageboard", messages: messages })
})
router.get("/new",(req,res) =>{
    res.render("new")
})
router.post("/new", (req, res) => {
    const userName = req.body.userName;
    const messageText = req.body.messageText;
    const newMessage = {
      text: messageText,
      user: userName,
      added: new Date(),
    };
    messages.push(newMessage);
  
    res.redirect("/");
  });

  module.exports = router  