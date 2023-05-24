const db = require('../models/index');
let token = require('../server.js');
const Users = db.users;

const loginUser = async (req, res) => {
  const { username, password } = req.query;
  try {
    const users = await Users.findAll({
      where: { username: username },
    });
    if (users.length && users[0].password === Number(password)) {
      res.status(200).send(users);
    } else {
      res.status(401).send('Неверный юзернейм пользователя или пароль');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Ошибка сервера');
  }
};

// Защищен от CSRF атаки
const editSafeUser = async (req, res) => {
  const { username } = req.body;
  // Обработка запроса на изменение профиля
  // ...
  // (Код для изменения пароля пользователя)
  // ...
  const csrfToken = req.headers['x-csrf-token'];
  console.log(token);
  if (csrfToken === token) {
    return res
      .status(200)
      .json({ message: `Профиль ${username} успешно изменен!` });
  } else {
    res.status(403).json({ error: 'Неверный CSRF токен' });
  }
};

// Уязвим от CSRF атаки
const editUnSafeUser = async (req, res) => {
  const { username } = req.body;
  // Обработка запроса на изменение профиля
  // ...
  // (Код для изменения пароля пользователя)
  // ...
  res.status(200).json({ message: `Профиль ${username} успешно изменен!` });
};

module.exports = {
  loginUser,
  editSafeUser,
  editUnSafeUser,
};
