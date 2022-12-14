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
    const row = req.body.row; //Row to insert
    const insertRow = "INSERT INTO plant_data (test) VALUES (?)"; //Insert query

    db.query(insertRow, [row], (err, rows) => { //Insert row into database
        if (err) throw err;
        console.log('inserted: ' + row); //Print row inserted
    });
});

//Delete from database
app.delete('/api/delete/:row', (req, res) => {
    const row = req.params.row;
    const deleteRow = "DELETE FROM plant_data WHERE test = ?";

    db.query(deleteRow, [row], (err, rows) => {
        if (err) throw err;
        console.log('deleted: ' + row);
    });
});

app.put('/api/update', (req, res) => {
    const row = req.body.row;
    const updateRow = "UPDATE plant_data SET test = ? WHERE test = ?";

    db.query(updateRow, [row, row], (err, rows) => {
        if (err) throw err;
        console.log('updated: ' + row);
    });
});

//Server port
app.listen(process.env.PORT || PORT, () => {
    console.log('Server started on port ' + PORT);
});