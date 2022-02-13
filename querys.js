"use strict";
exports.__esModule = true;
exports.querys = void 0;
var Querys = {
    getEntradas: function () { return "SELECT TOP 2000 * FROM Entradas"; },
    getEntradasByDni: function (dni, idEvento) { return "GetEntradas '".concat(dni, "', ").concat(idEvento); },
    getEventos: function () { return "SELECT * FROM Eventos"; },
    getEventoById: function (dni) { return "SELECT * FROM Eventos WHERE idEventos=".concat(dni); },
    getEntradasById: function (idEntradas) { return "SELECT * FROM Entradas WHERE idEntradas='".concat(idEntradas, "'"); },
    getEntradasByDate: function (date) { return "SELECT idEntradas, idEventos, DNI, FechaV, Visitantes, Show FROM Entradas WHERE FechaV='".concat(date, "' AND Show IS NULL"); },
    getEntradasByEventos: function (idEventos) { return "GetEntradas @IdEvento=".concat(idEventos); },
    putEntradaShow: function (idEntradas, show, sid) { return "UPDATE Entradas SET Show='".concat(show, "', Sid='").concat(sid, "' WHERE idEntradas=").concat(idEntradas, " AND Show IS NULL"); },
    postCliente: function (data) { return "INSERT INTO DevicesBackup (espectaculo_id, dni, fechayhora, personas, sala, device) VALUES ('".concat(data.espectaculo_id, "', '").concat(data.dni, "', '").concat(data.fechayhora, "', '").concat(data.personas, "', '").concat(data.sala, "', '").concat(data.device, "')"); }
};
exports.querys = Querys;
