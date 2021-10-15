"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doQuery = void 0;
var sql = require("msnodesqlv8");
var connectionString = "Server=DESKTOP-4381IJK\\SQLEXPRESS;" +
    "Database=tests;" +
    "User Id=admin;" +
    "Password=admin;" +
    "Trusted_Connection=Yes;" +
    "Driver={SQL Server Native Client 11.0}";
var getQuery = function (res, query) {
    sql.query(connectionString, query, function (e, data) {
        res.json(data);
    });
};
exports.doQuery = getQuery;
