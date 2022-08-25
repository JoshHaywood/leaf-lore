import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Index() {
    const [data, setData] = useState('');
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('https://leaf-lore.herokuapp.com/api/get')
            .then(res => {
                setRows(res.data);
            }).catch(err => {
            console.log(err);
        });
    });

    //Connects front-end submit to backend db
    const insertRow = () => {
        axios.post('https://leaf-lore.herokuapp.com/api/insert', {
            row: data
        });
    };

    return (
        <>
            <h1>Body</h1>
            <input type="text" onChange={(e) => {
                setData(e.target.value);
            }} />

            <button onClick={insertRow}>Submit</button>

            {rows.map((row) => {
                return <p>{row.test}</p>
            })}
        </>
    );
};