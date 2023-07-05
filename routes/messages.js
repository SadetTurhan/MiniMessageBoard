const express = require("express")
const router = express.Router()


router.get("/",(req,res) =>{
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
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

router.get("/new",(req,res) =>{
    res.render("new")
})
module.exports = router