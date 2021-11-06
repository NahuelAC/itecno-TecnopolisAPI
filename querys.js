"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querys = void 0;
var Querys = {
    getEntradas: function () { return "SELECT * FROM Entradas"; },
    getEntradasByDni: function (dni) { return "SELECT * FROM Entradas WHERE dni='" + dni + "'"; },
    getEntradasByDate: function (date) { return "SELECT * FROM Entradas WHERE fecha='" + date + "'"; },
    getEntradasByEventos: function (idEventos) { return "SELECT * FROM Entradas WHERE idEventos='" + idEventos + "'"; },
    putEntradaShow: function (idEntradas, sid) { return "UPDATE Entradas  SET Show=GETDATE(), Sid='" + sid + "' WHERE idEntradas=" + idEntradas; },
    putEntradaPreshow: function (idEntradas, presid) { return "UPDATE Entradas  SET Preshow=GETDATE(), PreSid='" + presid + "' WHERE idEntradas=" + idEntradas; },
    postCliente: function (data) { return ""; }
};
exports.querys = Querys;
