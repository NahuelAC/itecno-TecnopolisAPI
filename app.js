"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var querys_1 = require("./querys");
var app = express();
var router = express.Router();
var port = 3000;
router.get("/all", function (req, res) {
    querys_1.query.getEntradas(res);
});
router.get("/bydni/:dni", function (req, res) {
    var dni = req.params.dni;
    querys_1.query.getEntradasByDni(res, dni);
});
router.post("/ldb", function (req, res) {
    var data = {
        espectaculo_id: req.body.espectaculo_id,
        dni: req.body.dni,
        fechayhora: req.body.fechayhora,
        personas: req.body.personas,
        salas: req.body.salas
    };
    querys_1.query.postCliente(res, data);
});
//-------------------------------------------------------------------------------\\
app.use('/api/tickets', router);
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
