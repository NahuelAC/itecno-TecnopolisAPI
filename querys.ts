import {doQuery} from "./db";

const Query = {

    getEntradas: (res) => doQuery(res, `SELECT * FROM users`),

    getEntradasByDni: (res, dni) => doQuery(res, `SELECT * FROM <table> WHERE dni='${dni}'`),

    postCliente: (res, data) => doQuery(res, `INSERT INTO <table> (espectaculo_id, dni, fechayhora, personas, sala) ('${data.espectaculo_id}', '${data.dni}', '${data.fechayhora}', '${data.personas}', '${data.sala}')`)

}

export const query = Query;