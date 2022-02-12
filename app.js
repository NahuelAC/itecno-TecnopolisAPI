"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
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
router1.get("/bydni/:dni/:idEvento", function (req, res) {
    var dni = req.params.dni;
    var idEvento = req.params.idEvento;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByDni(dni, idEvento));
});
router1.get("/bydni/:dni", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dni;
    return __generator(this, function (_a) {
        dni = req.params.dni;
        (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByDni(dni, null));
        return [2 /*return*/];
    });
}); });
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
app.get("/apk", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var file;
    return __generator(this, function (_a) {
        file = "C:\\Users\\Administrator\\Documents\\tecnop_apk\\arqytech.qr.v2.apk";
        res.download(file);
        return [2 /*return*/];
    });
}); });
app.listen(port, function () {
    console.log("Api listening at http://localhost:".concat(port));
});
