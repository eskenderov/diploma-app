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

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routers
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const commentRouter = require('./routes/commentRouter');

app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.json({ message: 'hello from api' });
});

// unsafe of sql injections
app.post('/users/login', (req, res) => {
  const { username, password } = req.query;
  const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
  connection.query(query, (error, results) => {
    if (error) res.status(500).send('Ошибка сервера');
    else if (results.length) res.status(200).send(results);
    else res.status(401).send('Неверный юзернейм пользователя или пароль');
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80');
});
