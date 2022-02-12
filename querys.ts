

const Querys = {

    getEntradas: () => `SELECT TOP 2000 * FROM Entradas`,

    getEntradasByDni: (dni, idEvento) => `GetEntradas '${dni}', ${idEvento}`,

    getEventos: () => `SELECT * FROM Eventos`,

    getEventoById: (dni) => `SELECT * FROM Eventos WHERE idEventos=${dni}`,

    getEntradasById: (idEntradas) => `SELECT * FROM Entradas WHERE idEntradas='${idEntradas}'`,

    getEntradasByDate: (date) => `SELECT idEntradas, idEventos, DNI, FechaV, Visitantes, Show FROM Entradas WHERE FechaV='${date}'`,

    getEntradasByEventos: (idEventos) => `GetEntradas @IdEvento=${idEventos}`,

    putEntradaShow: (idEntradas, show, sid) => `UPDATE Entradas SET Show='${show}', Sid='${sid}' WHERE idEntradas=${idEntradas}`,

    postCliente: (data) => `INSERT INTO DevicesBackup (espectaculo_id, dni, fechayhora, personas, sala, device) VALUES ('${data.espectaculo_id}', '${data.dni}', '${data.fechayhora}', '${data.personas}', '${data.sala}', '${data.device}')`

}

export const querys = Querys
