const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
// const port = 8000;
const app = express();

// console.log(process.env.PORT);

app.get('/', (req, res)=>{
    return res.end('Test file');
})

app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log(`Server running on port: http://localhost:${port}`);

});