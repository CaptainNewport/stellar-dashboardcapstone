// Setup MySQL connection
var mysql = require("mysql");
var connection;

//======================== Connection to ClearDB ========================//
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
};

var connection = mysql.createConnection({
    port: 3306,
    host: "x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "tk8w8g70sj40ay8b",
    password: "zrbiu3va63s0icuv",
    database: "uy09x2yrpnw387oa"
});

//======================== Make Connection ========================//
connection.connect(function (err) {
    if (err) {
        console.error("Error connection: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

//======================== Export Connection for ORM ========================//
module.exports = connection;
