const express = require("express")
const User = require("../models/user")
const Recipe = require("../models/recipe")
const router = express.Router()

router.get('/getUsers', (req, res) => {
  try {
    const users = User.getAllUsers()
    res.send(users)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router