// Setup MySQL connection
var mysql = require("mysql");
var connection;

//======================== Connection to ClearDB ========================//
if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
};

var connection = mysql.createConnection({
    port: 3306,
    host: "mysql://b55b5906923150:0a517dbe@us-cdbr-iron-east-05.cleardb.net/heroku_d822870a15340b2?reconnect=true",
    user: "b55b5906923150",
    password: "0a517dbe",
    database: "heroku_d822870a15340b2"
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