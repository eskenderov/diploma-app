import { Search } from 'components/Search/Search';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { callGetUsers } from 'services/api/users';
import { UserList } from 'components/User/UserList';

export const InjectionsContent = ({ tab }) => {
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([]);
  }, [tab]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await callGetUsers({ username: searchValue });
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="injections-content">
      <div className="devider">
        {tab === 'unsafe'
          ? 'Поиск уязвим от SQL injection'
          : 'Поиск защищён от SQL injection'}
      </div>
      <Search
        label="Найти пользователя"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        onSubmit={handleSearchSubmit}
        btnTitle="Найти"
        placeholder=" Введите имя   "
      />
      <UserList data={users} />
    </div>
  );
};

InjectionsContent.propTypes = {
  type: PropTypes.oneOf('safe' || 'unsafe'),
};
