"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querys = void 0;
var Querys = {
    getEntradas: function () { return "SELECT * FROM Entradas"; },
    getEntradasByDni: function (dni) { return "SELECT * FROM Entradas WHERE DNI='" + dni + "'"; },
    getEntradasById: function (idEntradas) { return "SELECT * FROM Entradas WHERE idEntradas='" + idEntradas + "'"; },
    getEntradasByDate: function (date) { return "SELECT * FROM Entradas WHERE FechaV='" + date + "'"; },
    getEntradasByEventos: function (idEventos) { return "SELECT * FROM Entradas WHERE idEventos='" + idEventos + "'"; },
    putEntradaShow: function (idEntradas, show, sid) { return "UPDATE Entradas  SET Show='" + show + "', Sid='" + sid + "' WHERE idEntradas=" + idEntradas; },
    postCliente: function (data) { return "INSERT INTO DevicesBackup (espectaculo_id, dni, fechayhora, personas, sala, device) VALUES ('" + data.espectaculo_id + "', '" + data.dni + "', '" + data.fechayhora + "', '" + data.personas + "', '" + data.sala + "', '" + data.device + "')"; }
};
exports.querys = Querys;
