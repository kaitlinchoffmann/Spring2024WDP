const express = require("express")
const app = express()

const userRoutes = require("./server/routes/user")

app.use('/users', userRoutes)

