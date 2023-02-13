const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const db = require('./database');

const corsOption = {
  origin: 'https://localhost:8081',
};

// routers
const productRouter = require('./routes/productRouter');
app.use('/api/products', productRouter);

// middleware
app.use(cors(corsOption));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// testing api
app.get('/', (req, res) => {
  console.log('Hello');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80');
});
