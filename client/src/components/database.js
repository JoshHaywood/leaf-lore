import React, {useState, useEffect} from "react";
import axios from "axios";

const URL = process.env.URL || 'http://localhost:8080';
axios.defaults.baseURL = URL;

export default function Database() {
    const [data, setData] = useState('');
    const [rows, setRows] = useState([]);
    const [row, setRow] = useState('');

    useEffect(() => {
        axios.get('/api/get')
            .then(res => {
                setRows(res.data);
            }).catch(err => {
            console.log(err);
        });
    });

    //Insert into database api request
    const insertRow = () => {
        axios.post('/api/insert', {
            row: data
        });
    };

    //Delete from database api request
    const deleteRow = () => {
        axios.delete(`/api/delete/${data}`);
    };

    const updateRow = () => {
        axios.put('/api/update', {
            row: data
        });
        setRow('');
    };

    return (
        <>
            <input type="text" onChange={(e) => {
                setData(e.target.value);
            }} />

            <button onClick={insertRow}>Submit</button>

            {rows.map((row) => {
                return (
                    <div>
                        <p>{row.test}</p>
                        <button onClick={() => {deleteRow(row.test)}}>Delete</button>
                        <input type="text" onChange={(e) => {
                            setRow(e.target.value);
                        }} />
                        <button onClick={updateRow}>Update</button>
                    </div>
                )
            })}
        </>
    );
};