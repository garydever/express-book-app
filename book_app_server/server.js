const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const readingListRouter = require('./api');

const app = express();


let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 4000;
}

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/readingList', readingListRouter);

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
  });
  


  module.exports = app;