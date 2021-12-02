

const Querys = {

    getEntradas: () => `SELECT * FROM Entradas`,

    getEntradasByDni: (dni) => `SELECT * FROM Entradas WHERE DNI='${dni}'`,

    getEntradasById: (idEntradas) => `SELECT * FROM Entradas WHERE idEntradas='${idEntradas}'`,

    getEntradasByDate: (date) => `SELECT * FROM Entradas WHERE FechaV='${date}'`,

    getEntradasByEventos: (idEventos) => `SELECT * FROM Entradas WHERE idEventos='${idEventos}'`,

    putEntradaShow: (idEntradas, show, sid) => `UPDATE Entradas  SET Show='${show}', Sid='${sid}' WHERE idEntradas=${idEntradas}`,

    postCliente: (data) => `INSERT INTO DevicesBackup (espectaculo_id, dni, fechayhora, personas, sala, device) VALUES ('${data.espectaculo_id}', '${data.dni}', '${data.fechayhora}', '${data.personas}', '${data.sala}', '${data.device}')`

}

export const querys = Querys