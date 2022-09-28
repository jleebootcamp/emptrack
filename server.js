const mysql = require("mysql");
const inquirer = require("inquirer");
require('dotenv').config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    db_name,
    db_user,
    db_password,
    database: 'hr'
});