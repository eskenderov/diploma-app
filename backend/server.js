const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');

const corsOption = {
  origin: 'https://localhost:8081',
};

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'thesis-bd',
});

// routers
const productRouter = require('./routes/productRouter');
app.use('/api/products', productRouter);

// middleware
app.use(cors(corsOption));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// testing api
app.get('/', (req, res) => {
  res.json({ message: 'hello from api' });
});

app.get('/users', (req, res) => {
  const { search } = req.query;
  const query = `SELECT * FROM users WHERE name LIKE '%${search}%'`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    } else {
      res.json(results);
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80');
});
