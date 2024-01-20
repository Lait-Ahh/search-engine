require('dotenv').config();

const http = require('http');
const express = require('express');
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});

con.connect((err) => {
    if(err) throw err;
    console.log(`[MYSQL] Connected with id ${con.threadId}`);
});

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/search', (req, res) => {
    res.render('search', {});
});

http.createServer(app).listen(process.env.PORT_HTTP, () => console.log(`[HTTP] Listening on port ${process.env.PORT_HTTP}`));
