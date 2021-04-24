const express = require("express")
const server = express()

server.use(express.json())

let costumer = [
    { id: 1, nome: "Anderson Douglas", email: "anderson@gmail.com" },
    { id: 2, nome: "Elisa Santos Piva", email: "e.piva@gmail.com" },
    { id: 3, nome: "Gabrielle Oliveira", email: "gabioli@gmail.com" },
]

server.listen(3000);