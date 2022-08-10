
const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {         
    console.log('servidor corriendo')
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
