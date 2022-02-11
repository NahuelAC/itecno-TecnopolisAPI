"use strict";
exports.__esModule = true;
exports.postAndSendQuery = exports.putAndSendQuery = exports.doAndSendQuery = void 0;
var configs_1 = require("./configs");
var sql = require("msnodesqlv8");
var connectionString = "Server=".concat(configs_1.config.server, ";") +
    "User Id=".concat(configs_1.config.user, ";") +
    "Password=".concat(configs_1.config.password, ";") +
    "Database=".concat(configs_1.config.database_prod, ";") +
    "Trusted_Connection=Yes;" +
    "Driver={SQL Server Native Client 11.0}";
var getQuery = function (res, query) {
    sql.query(connectionString, query, function (e, data) {
        console.log(query);
        console.log(data);
        res.json(data);
    });
};
var putQuery = function (res, query) {
    sql.query(connectionString, query, function (e, data) {
        console.log(query);
        console.log(data);
        res.json(data);
    });
};
var postQuery = function (res, query) {
    sql.query(connectionString, query, function (e, data) {
        console.log(query);
        console.log(data);
        res.json(data);
        console.log(e);
    });
};
exports.doAndSendQuery = getQuery;
exports.putAndSendQuery = putQuery;
exports.postAndSendQuery = postQuery;
