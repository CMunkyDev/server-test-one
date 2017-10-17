const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/route', (req, res, next) => {
  res.json('lol I\'m json text');
})

app.use((err, req, res, next) => {
  res.status(err.status).json(err);
})

app.use((req, res) => {
  res.status(404).json({error: {message: 'Not Found.'}})
})

const listener = () => console.log(`listening on port ${port}!`)
app.listen(port, listener);
