const express = require("express");

const app = express()

app.get("/", (req, res)=>res.send("<h1>Express con HTML!!</h1>"))

app.listen(4000);
console.log("Funcionando en el puerto 4000");