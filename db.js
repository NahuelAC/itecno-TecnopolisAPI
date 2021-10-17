"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doAndSendQuery = void 0;
var configs_1 = require("./configs");
var sql = require("msnodesqlv8");
var connectionString = "Server=" + configs_1.config.server + ";" +
    ("User Id=" + configs_1.config.user + ";") +
    ("Password=" + configs_1.config.password + ";") +
    ("Database=" + configs_1.config.database + ";") +
    "Trusted_Connection=Yes;" +
    "Driver={SQL Server Native Client 11.0}";
var getQuery = function (res, query) {
    sql.query(connectionString, query, function (e, data) {
        res.json(data);
    });
};
exports.doAndSendQuery = getQuery;
