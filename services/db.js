import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "037599",
  database: "next",
});

connection.connect();
export default connection;
