

const Querys = {

    getEntradas: () => `SELECT * FROM Entradas`,

    getEntradasByDni: (dni) => `SELECT * FROM Entradas WHERE dni='${dni}'`,

    getEntradasByDate: (date) => `SELECT * FROM Entradas WHERE fecha='${date}'`,

    getEntradasByEventos: (idEventos) => `SELECT * FROM Entradas WHERE idEventos='${idEventos}'`,

    putEntradaShow: (idEntradas, sid) => `UPDATE Entradas  SET Show=GETDATE(), Sid='${sid}' WHERE idEntradas=${idEntradas}`,

    putEntradaPreshow: (idEntradas, presid) => `UPDATE Entradas  SET Preshow=GETDATE(), PreSid='${presid}' WHERE idEntradas=${idEntradas}`,

    postCliente: (data) => ``

}

export const querys = Querys