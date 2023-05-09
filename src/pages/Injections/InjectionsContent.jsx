import { Search } from 'components/Search/Search';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { loginUser } from 'services/api/users';
import { UserList } from 'components/User/UserList';
import { UiField } from 'shared/ui/UiField';

export const InjectionsContent = ({ tab }) => {
  const [values, setValues] = useState({ username: '', password: '' });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const onInputChange = ({ nameField, value }) => {
    setValues((prevState) => ({
      ...prevState,
      [nameField]: value,
    }));
    setError(null);
  };
  useEffect(() => {
    setUsers([]);
  }, [tab]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = values;
    try {
      if (username.length > 0 && password.length > 4) {
        const { data } = await loginUser({
          username,
          password,
          type: tab,
        });
        setUsers(data);
        setError(null);
      } else return false;
    } catch (error) {
      console.log(error);
      setError(error.response.data);
      setUsers([]);
    }
  };
  return (
    <div className="injections-content">
      <Search
        label="Авторизация"
        onSubmit={handleSearchSubmit}
        btnTitle="Войти"
        error={error}
      >
        <UiField
          title="Логин"
          type="text"
          value={values.username}
          onChange={(value) =>
            onInputChange({
              nameField: 'username',
              value,
            })
          }
          autoComplete="one-time-code"
        />
        <UiField
          title="Пароль"
          type="password"
          value={values.password}
          onChange={(value) =>
            onInputChange({
              nameField: 'password',
              value,
            })
          }
          autoComplete="one-time-code"
        />
      </Search>
      <UserList data={users} />
    </div>
  );
};

InjectionsContent.propTypes = {
  type: PropTypes.oneOf('safe' || 'unsafe'),
};
