const mysql = require('mysql');

const db = mysql.createConnection({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASS,
    port:process.env.MYSQLPORT,
    database:process.env.MYSQLDATABASE
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE avis_notes", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });


module.exports = db;