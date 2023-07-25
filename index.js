const express = require('express');
const db = require('./config/mongoose')
require('dotenv').config();
// const port = process.env.PORT;
const port = 8000;
const app = express();

// console.log(process.env.SECERET);

app.get('/', (req, res)=>{
    return res.end('Test file version-pro');
})

app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log(`Server running on port: ${port}`);

});