const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'thesis-bd',
});

const csrfProtection = csrf({
  // Опция secure: true гарантирует, что кука будет установлена только для HTTPS-соединений.
  // В случае работы на localhost без HTTPS, следует закомментировать или установить в false.
  // sameSite: 'lax',
  cookie: {
    secure: false,
    sameSite: true,
  },
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Маршрутизация
const userRouter = require('./routes/userRouter');
const commentRouter = require('./routes/commentRouter');

// Маршрут для предоставления CSRF-токена
app.get('/api/csrf-token', csrfProtection, (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie('csrfToken', 'test');
  res.json({ csrfToken });
});

app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);

app.get('/', (req, res) => {
  res.json({ message: `hello from api - ${req.cookies.csrfToken}` });
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

const PORT = 8080;
app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80');
});
