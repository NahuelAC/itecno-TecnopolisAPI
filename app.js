"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var querys_1 = require("./querys");
var db_1 = require("./db");
var app = express();
var router = express.Router();
var port = 3000;
//------------------------| Tecnopolis Api |-------------------------------------\\
router.get("/all", function (req, res) {
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradas());
});
router.get("/bydni/:dni", function (req, res) {
    var dni = req.params.dni;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByDni(dni));
});
router.get('/bydate/:date', function (req, res) {
    var date = req.params.date;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByDate(date));
});
router.get('/byeventos/:idEventos', function (req, res) {
    var idEventos = req.params.idEventos;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByEventos(idEventos));
});
router.post("/localdatabasebackup/:espectaculo_id/:dni/:fechayhora/:personas/:sala/:device", function (req, res) {
    var data = {
        // espectaculo_id: req.body.espectaculo_id,
        // dni: req.body.dni,
        // fechayhora: req.body.fechayhora,
        // personas: req.body.personas,
        // sala: req.body.sala
        espectaculo_id: req.params.espectaculo_id,
        dni: req.params.dni,
        fechayhora: req.params.fechayhora,
        personas: req.params.personas,
        sala: req.params.sala,
        device: req.params.device
    };
    (0, db_1.postAndSendQuery)(res, querys_1.querys.postCliente(data));
});
router.put("/show/:idEntradas/:deviceid", function (req, res) {
    var idEntradas = req.params.idEntradas;
    var deviceid = req.params.deviceid;
    (0, db_1.putAndSendQuery)(res, querys_1.querys.putEntradaShow(idEntradas, deviceid));
});
router.put("/preshow/:idEntradas/:deviceid", function (req, res) {
    var idEntradas = req.params.idEntradas;
    var deviceid = req.params.deviceid;
    (0, db_1.putAndSendQuery)(res, querys_1.querys.putEntradaPreshow(idEntradas, deviceid));
});
//-------------------------------------------------------------------------------\\
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/tecnopolis/tickets', router);
app.listen(port, function () {
    console.log("Api listening at http://localhost:" + port);
});
