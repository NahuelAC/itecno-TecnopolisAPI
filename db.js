"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAndSendQuery = exports.putAndSendQuery = exports.doAndSendQuery = void 0;
var configs_1 = require("./configs");
var sql = require("msnodesqlv8");
var connectionString = "Server=" + configs_1.config.server + ";" +
    ("User Id=" + configs_1.config.user + ";") +
    ("Password=" + configs_1.config.password + ";") +
    ("Database=" + configs_1.config.database_dev + ";") +
    "Trusted_Connection=Yes;" +
    "Driver={SQL Server Native Client 11.0}";
var getQuery = function (res, query) {
    sql.query(connectionString, query, function (e, data) {
        console.log(data);
        res.json(data);
    });
};
var putQuery = function (res, query) {
    sql.query(connectionString, query, function (e, data) {
        console.log(query);
        res.json(data);
    });
};
var postQuery = function (res, query) {
    sql.query(connectionString, query, function (e, data) {
        console.log(query);
        if (e == null) {
            res.status(202);
        }
        else {
            res.status(404);
            console.log(e);
        }
    });
};
exports.doAndSendQuery = getQuery;
exports.putAndSendQuery = putQuery;
exports.postAndSendQuery = postQuery;
