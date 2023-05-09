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

module.exports = {
  loginUser,
};
