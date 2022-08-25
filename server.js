const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3001;

//Dependencies
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res)=>{
  res.sendFile(path.join(__dirname, "client/build",'index.html'));
})

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
    const insert = "INSERT INTO plant_data (test) VALUES (?)";

    db.query(insert, [row], (err, rows) => {
        if (err) throw err;
        console.log("inserted: " + row);
    });
});

//Server port
app.listen(process.env.PORT || PORT, () => {
    console.log('Server started on port ' + PORT);
});