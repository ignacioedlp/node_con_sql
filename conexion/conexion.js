//connection with mysql database
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mitienda",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

// connection.query("SELECT * FROM productos", function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// connection.end(function (err) {
//   // The connection is terminated now
// });
