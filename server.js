const express = require("express");

const app = express()

app.get("/", (req, res)=>res.send("Hola mundo con express"))

app.listen(4000);
console.log("Funcionando en el puerto 4000");