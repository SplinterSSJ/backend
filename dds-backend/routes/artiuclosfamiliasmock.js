const express = require('express');
const router = express.Router();

let arr_ArticulosFamiliasMock = [
    {
      "IdArticuloFamilia": 1,
      "Nombre": "Accesorios"
    },
    {
      "IdArticuloFamilia": 2,
      "Nombre": "Audio"
    },
    {
      "IdArticuloFamilia": 3,
      "Nombre": "Celulares"
    },
    {
      "IdArticuloFamilia": 4,
      "Nombre": "Cuidado Personal"
    },
    {
      "IdArticuloFamilia": 5,
      "Nombre": "Dvd"
    },
    {
      "IdArticuloFamilia": 6,
      "Nombre": "Fotografia"
    },
    {
      "IdArticuloFamilia": 7,
      "Nombre": "Frio-Calor"
    },
    {
      "IdArticuloFamilia": 8,
      "Nombre": "Gps"
    },
    {
      "IdArticuloFamilia": 9,
      "Nombre": "Informatica"
    },
    {
      "IdArticuloFamilia": 10,
      "Nombre": "Led - Lcd"
    }
];

router.get('/api/articulosfamiliasmock', async function (req, res){
    res.json(arr_ArticulosFamiliasMock);
});
module.exports = router;