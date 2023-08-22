const postgres = require("postgres");

const sql = postgres({
  host: "database",
  database: "postgres",
  username: "postgres",
  password: "root",
});

module.exports = sql;
