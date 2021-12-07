"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var querys_1 = require("./querys");
var db_1 = require("./db");
var app = express();
var router1 = express.Router();
var router2 = express.Router();
var port = 3000;
//------------------------| Tecnopolis Api |-------------------------------------\\
router1.get("/all", function (req, res) {
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradas());
});
router1.get('/bydate/:date', function (req, res) {
    var date = req.params.date;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByDate(date));
});
router1.get("/bydni/:dni", function (req, res) {
    var dni = req.params.dni;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByDni(dni));
});
router1.get('/byeventos/:idEventos', function (req, res) {
    var idEventos = req.params.idEventos;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByEventos(idEventos));
});
router1.post("/localdatabasebackup/:espectaculo_id/:dni/:fechayhora/:personas/:sala/:device", function (req, res) {
    var data = {
        espectaculo_id: req.params.espectaculo_id,
        dni: req.params.dni,
        fechayhora: req.params.fechayhora,
        personas: req.params.personas,
        sala: req.params.sala,
        device: req.params.device
    };
    (0, db_1.postAndSendQuery)(res, querys_1.querys.postCliente(data));
});
router1.put("/show/:idEntradas/:show/:deviceid", function (req, res) {
    var idEntradas = req.params.idEntradas;
    var show = req.params.show;
    var deviceid = req.params.deviceid;
    (0, db_1.putAndSendQuery)(res, querys_1.querys.putEntradaShow(idEntradas, show, deviceid));
});
router2.get("/all", function (req, res) {
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEventos());
});
router2.get("/byid/:id", function (req, res) {
    var id = req.params.id;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEventoById(id));
});
//-------------------------------------------------------------------------------\\
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/tecnopolis/tickets', router1);
app.use('/api/tecnopolis/eventos', router2);
app.listen(port, function () {
    console.log("Api listening at http://localhost:" + port);
});
