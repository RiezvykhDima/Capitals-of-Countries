const express = require('express');
const router = require('../config/router');

const app = express();
const port = 3030;

app.use(router); 

app.listen(port, () => {
    console.log(`server is listening port ${port}`);
});