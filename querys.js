"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querys = void 0;
var Querys = {
    t: {
        getEntradas: function () { return "SELECT * FROM Entradas"; },
        getEntradasByDni: function (dni) { return "SELECT * FROM Entradas WHERE dni='" + dni + "'"; },
        postCliente: function (data) { return "INSERT INTO <table> (espectaculo_id, dni, fechayhora, personas, sala) ('" + data.espectaculo_id + "', '" + data.dni + "', '" + data.fechayhora + "', '" + data.personas + "', '" + data.sala + "')"; }
    },
    cck: {
        getEntradas: function () { return "SELECT * FROM Entradas"; },
        getEntradasByDni: function (dni) { return "SELECT * FROM Entradas WHERE dni='" + dni + "'"; },
        postCliente: function (data) { return "INSERT INTO <table> (espectaculo_id, dni, fechayhora, personas, sala) ('" + data.espectaculo_id + "', '" + data.dni + "', '" + data.fechayhora + "', '" + data.personas + "', '" + data.sala + "')"; }
    }
};
exports.querys = Querys;
