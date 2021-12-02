"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querys = void 0;
var Querys = {
    getEntradas: function () { return "SELECT * FROM Entradas"; },
    getEntradasByDni: function (dni) { return "SELECT * FROM Entradas WHERE DNI='" + dni + "'"; },
    getEntradasByDate: function (date) { return "SELECT * FROM Entradas WHERE FechaV='" + date + "'"; },
    getEntradasByEventos: function (idEventos) { return "SELECT * FROM Entradas WHERE idEventos='" + idEventos + "'"; },
    putEntradaShow: function (idEntradas, sid) { return "UPDATE Entradas  SET Show=GETDATE(), Sid='" + sid + "' WHERE idEntradas=" + idEntradas; },
    putEntradaPreshow: function (idEntradas, presid) { return "UPDATE Entradas  SET Preshow=GETDATE(), PreSid='" + presid + "' WHERE idEntradas=" + idEntradas; },
    postCliente: function (data) { return "INSERT INTO DevicesBackup (espectaculo_id, dni, fechayhora, personas, sala, device) VALUES ('" + data.espectaculo_id + "', '" + data.dni + "', '" + data.fechayhora + "', '" + data.personas + "', '" + data.sala + "', '" + data.device + "')"; }
};
exports.querys = Querys;
