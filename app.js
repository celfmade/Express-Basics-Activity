const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send('Hello world!');
});

app.get('/balance', (req,res) => {
    res.send('balance');
});

app.get('/withdraw', (req,res) => {
    res.send('withdraw');
});

app.get('/deposit', (req,res) => {
    res.send('deposit');
});

app.listen(5000, () => {
    console.log('This application is running on localhoost:5000')
});