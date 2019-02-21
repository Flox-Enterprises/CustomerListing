const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

//const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const app = express();
app.options('*', cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

var routes = require('./routes/route');
app.use('/api', routes)

app.listen(port, () => {
    console.log('Server started on port ' + port);
});