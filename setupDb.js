require("dotenv").config();
const mysql = require("mysql2");

// Database configuration
const database = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE, // 'test'
};

// SQL statements
const tableSQL = `
CREATE TABLE IF NOT EXISTS user_tbl (
    user_id INT(11) AUTO_INCREMENT PRIMARY KEY,
    user_fname VARCHAR(45) NOT NULL,
    user_lname VARCHAR(45) NOT NULL,
    user_isdel INT(11) DEFAULT 0
);

INSERT INTO user_tbl (user_fname, user_lname, user_isdel) VALUES
('John', 'Doe', 0),
('Jane', 'Smith', 0),
('Alice', 'Brown', 1),
('Bob', 'Johnson', 0),
('Charlie', 'Davis', 1)
ON DUPLICATE KEY UPDATE user_id=user_id;
`;

// Function to create database
function createDatabase(callback) {
  console.log("🔹 Creating database...");

  const connection = mysql.createConnection({
    user: database.user,
    password: database.password,
    host: database.host,
    port: database.port,
  });

  connection.connect((err) => {
    if (err) {
      console.error("❌ MySQL Connection Failed:", err);
      return;
    }

    connection.query(
      `CREATE DATABASE IF NOT EXISTS ${database.database};`,
      (err) => {
        if (err) {
          console.error("❌ Error creating database:", err);
        } else {
          console.log(
            `✅ Database '${database.database}' created or already exists.`
          );
          callback();
        }
        connection.end();
      }
    );
  });
}

// Function to initialize tables
function initializeTables() {
  console.log("🔹 Creating tables...");

  const connection = mysql.createConnection({
    user: database.user,
    password: database.password,
    host: database.host,
    port: database.port,
    database: database.database, // Now using the 'test' database
    multipleStatements: true,
  });

  connection.connect((err) => {
    if (err) {
      console.error("❌ MySQL Connection Failed:", err);
      return;
    }

    connection.query(tableSQL, (err) => {
      if (err) {
        console.error("❌ Error executing SQL:", err);
      } else {
        console.log("✅ Tables created and data inserted.");
      }
      connection.end();
    });
  });
}

// Run the database setup
createDatabase(initializeTables);
