
const Pool = require('pg').Pool
require('dotenv').config()

// import pkg from "pg";
// const {Pool} = pkg;
// import dotenv from "dotenv";



const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
    database: "todoapp",
})

module.exports = pool;

