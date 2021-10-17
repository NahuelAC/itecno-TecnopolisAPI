"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var querys_1 = require("./querys");
var db_1 = require("./db");
var app = express();
var router_t = express.Router();
var router_cck = express.Router();
var port = 3000;
//------------------------| Tecnopolis Api |-------------------------------------\\
router_t.get("/all", function (req, res) {
    (0, db_1.doAndSendQuery)(res, querys_1.querys.t.getEntradas());
});
router_t.get("/bydni/:dni", function (req, res) {
    var dni = req.params.dni;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.t.getEntradasByDni(dni));
});
router_t.post("/localdatabasebackup", function (req, res) {
    var data = {
        espectaculo_id: req.body.espectaculo_id,
        dni: req.body.dni,
        fechayhora: req.body.fechayhora,
        personas: req.body.personas,
        salas: req.body.salas
    };
    (0, db_1.doAndSendQuery)(res, querys_1.querys.t.postCliente(data));
});
//----------------------| Centro Cultural Kirchner Api |------------------------\\
router_cck.get("/all", function (req, res) {
    (0, db_1.doAndSendQuery)(res, querys_1.querys.cck.getEntradas());
});
router_cck.get("/bydni/:dni", function (req, res) {
    var dni = req.params.dni;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.cck.getEntradasByDni(dni));
});
router_cck.post("/localdatabasebackup", function (req, res) {
    var data = {
        espectaculo_id: req.body.espectaculo_id,
        dni: req.body.dni,
        fechayhora: req.body.fechayhora,
        personas: req.body.personas,
        salas: req.body.salas
    };
    (0, db_1.doAndSendQuery)(res, querys_1.querys.cck.postCliente(data));
});
//-------------------------------------------------------------------------------\\
app.use('/api/tecnopolis/tickets', router_t);
app.use('/api/cck/tickets', router_cck);
app.listen(port, function () {
    console.log("Api listening at http://localhost:" + port);
});
