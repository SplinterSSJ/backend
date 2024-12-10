const express = require("express");

//crear servidor
const app = express();

//controlar ruta
app.get("/", (req, res) => {
    res.send("Backend inicial dss-backend!");
});

//levantar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`sitio escuhcando en el puerto ${port}`);
});
