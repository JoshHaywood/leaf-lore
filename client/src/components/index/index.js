import React, {useState} from "react";
import axios from "axios";

export default function Index() {
    const [test, setState] = useState('');

    //Connects front-end submit to backend db
    const insertRow = () => {
        axios.post('http://localhost:3001/api/insert', {
            row: test
        }).then(res => {
            alert('Inserted data' + res.data);
        });
    };

    return (
        <>
            <h1>Body</h1>
            <input type="text" onChange={(e) => {
                setState(e.target.value);
            }} />

            <button onClick={insertRow}>Submit</button>
        </>
    );
};