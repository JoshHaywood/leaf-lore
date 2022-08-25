const mysql = require('mysql');

//Database setup
const db = mysql.createPool({
    /*
        //Local
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'leaf_lore_schema'
    */

    //Heroku deployment
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'bc16b12cf33473',
    password: '6217be12',
    database: 'heroku_4ee827474a40b45'
});

module.exports = db;
