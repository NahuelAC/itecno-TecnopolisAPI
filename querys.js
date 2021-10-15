"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var db_1 = require("./db");
var Query = {
    getEntradas: function (res) { return (0, db_1.doQuery)(res, "SELECT * FROM users"); },
    getEntradasByDni: function (res, dni) { return (0, db_1.doQuery)(res, "SELECT * FROM <table> WHERE dni='" + dni + "'"); },
    postCliente: function (res, data) { return (0, db_1.doQuery)(res, "INSERT INTO <table> (espectaculo_id, dni, fechayhora, personas, sala) ('" + data.espectaculo_id + "', '" + data.dni + "', '" + data.fechayhora + "', '" + data.personas + "', '" + data.sala + "')"); }
};
exports.query = Query;
