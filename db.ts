import { SqlClient } from "msnodesqlv8";
import { config } from "./configs";

const sql: SqlClient = require("msnodesqlv8");


const connectionString =
    `Server=${config.server};` +
    `User Id=${config.user};` +
    `Password=${config.password};` +
    `Database=${config.database_dev};` +
    `Trusted_Connection=Yes;` +
    `Driver={SQL Server Native Client 11.0}`;


const getQuery = (res, query: string) => {
    sql.query(connectionString, query, (e, data) => {
        console.log(data);
        res.json(data);
    })};

const putQuery = (res, query: string) => {
    sql.query(connectionString, query, (e, data) => {
        console.log(query);
        res.json(data);
    })};

const postQuery = (res, query: string) => {
    sql.query(connectionString, query, (e, data) => {
        console.log(query);

        res.json(data);

        console.log(e);

    })};

export const doAndSendQuery = getQuery;
export const putAndSendQuery = putQuery;
export const postAndSendQuery = postQuery;
