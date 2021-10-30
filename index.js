const express = require('express');

const app = express();

app.use(() => {
    console.log('hello server...');
    console.log('hallo lagii...');
    console.log('hallo tigaaa...');
});

app.listen(4000);