import { SqlClient } from "msnodesqlv8";
import { config } from "./configs";

const sql: SqlClient = require("msnodesqlv8");


const connectionString =
    `Server=${config.server};` +
    `User Id=${config.user};` +
    `Password=${config.password};` +
    `Database=${config.database};` +
    `Trusted_Connection=Yes;` +
    `Driver={SQL Server Native Client 11.0}`;


const getQuery = (res, query: string) => {
    sql.query(connectionString, query, (e, data) => {
        res.json(data);
    });
}

export const doAndSendQuery = getQuery;