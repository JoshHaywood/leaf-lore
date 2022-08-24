const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const mysql = require('mysql');

//Database setup
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'leaf_lore_schema'
});

//Dependencies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Insert into database
app.post('/api/insert', (req, res) => {
    const row = req.body.row;
    const insert = "INSERT INTO plant_data (test) VALUES (?)";

    db.query(insert, [row], (err, results) => {
        console.log(err, results);
    });
});

//Server port
app.listen(3001, () => {
    console.log('Server started on port 3001');
});