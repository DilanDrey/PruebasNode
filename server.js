const express = require("express");

const app = express()

app.get("/", (req, res)=>res.send("<h1>Express con HTML!!</h1>"))

app.listen(8000);
console.log("Funcionando en el puerto 8000");