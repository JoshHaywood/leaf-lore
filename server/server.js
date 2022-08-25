const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8080;

//Dependencies
app.use(express.json());
app.use(cors());

//Select all rows from table
app.get('/api/get', (req, res) => {
    const selectAll = 'SELECT * FROM plant_data';

    db.query(selectAll, (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

//Insert into database
app.post('/api/insert', (req, res) => {
    const row = req.body.row;
    const insertRow = "INSERT INTO plant_data (test) VALUES (?)";

    db.query(insertRow, [row], (err, rows) => {
        if (err) throw err;
        console.log('inserted: ' + row);
    });
});

app.delete('/api/delete', (req, res) => {
    const row = req.body.row;
    const deleteRow = "DELETE FROM plant_data WHERE test = ?";

    db.query(deleteRow, [row], (err, rows) => {
        if (err) console.log(err);
        console.log('deleted: ' + row);
    });
});

//Server port
app.listen(process.env.PORT || PORT, () => {
    console.log('Server started on port ' + PORT);
});