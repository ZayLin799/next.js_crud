import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "next",
});

connection.connect();
export default connection;
