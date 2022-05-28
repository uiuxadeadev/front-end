const express = require('express');
const app = express();

//http://expressjs.com/ja/api.html#express.json
//This function is built into Express based on Body-Parser. Data sent by the client can be retrieved and manipulated via req.body.
app.use(express.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

module.exports = express;