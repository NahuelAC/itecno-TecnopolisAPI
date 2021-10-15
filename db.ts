import { SqlClient } from "msnodesqlv8";

const sql: SqlClient = require("msnodesqlv8");


const connectionString =
    "Server=DESKTOP-4381IJK\\SQLEXPRESS;" +
    "Database=tests;" +
    "User Id=admin;" +
    "Password=admin;" +
    "Trusted_Connection=Yes;" +
    "Driver={SQL Server Native Client 11.0}";


const getQuery = (res, query: string) => {
    sql.query(connectionString, query, (e, data) => {
        res.json(data);
    });
}

export const doQuery = getQuery;