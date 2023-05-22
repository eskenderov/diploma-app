const db = require('../models/index');

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
  if(!req.cookies.csrfToken) return res.status(403).json({ error: 'CSRF токен отсутствует!' });
  if (req.cookies.csrfToken !== req.headers['x-csrf-token']) return res.status(403).json({ error: 'Неверный CSRF токен' });
  // Обработка запроса на изменение профиля
  // ...
  // (Код для изменения пароля пользователя)
  // ...
  res.json({ message: 'Профиль успешно изменен!' });
  res.status(200);
};

// Уязвим от CSRF атаки
const editUnSafeUser = async (req, res) => {
  // Обработка запроса на изменение профиля
  // ...
  // (Код для изменения пароля пользователя)
  // ...
  res.json({ message: 'Профиль успешно изменен!' });
  res.status(200);
};

module.exports = {
  loginUser,
  editSafeUser,
  editUnSafeUser,
};
