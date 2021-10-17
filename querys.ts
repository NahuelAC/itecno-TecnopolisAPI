

const Querys = {

    t: {
        getEntradas: () => `SELECT * FROM Entradas`,

        getEntradasByDni: (dni) => `SELECT * FROM Entradas WHERE dni='${dni}'`,

        getEntradasByDay: (day) => `SELECT * FROM Entradas WHERE fecha='${day}'`,

        postCliente: (data) => `INSERT INTO <table> (espectaculo_id, dni, fechayhora, personas, sala) ('${data.espectaculo_id}', '${data.dni}', '${data.fechayhora}', '${data.personas}', '${data.sala}')`
    },

    cck: {
        getEntradas: () => `SELECT * FROM Entradas`,

        getEntradasByDni: (dni) => `SELECT * FROM Entradas WHERE dni='${dni}'`,

        getEntradasByDay: (day) => `SELECT * FROM Entradas WHERE fecha='${day}'`,

        postCliente: (data) => `INSERT INTO <table> (espectaculo_id, dni, fechayhora, personas, sala) ('${data.espectaculo_id}', '${data.dni}', '${data.fechayhora}', '${data.personas}', '${data.sala}')`
    }

}

export const querys = Querys