import React from 'react';
import { NavLink } from 'react-router-dom';

const dataList = [
  {
    title: 'SQL injection',
    to: '/',
  },
  {
    title: 'XSS',
    to: '/xss',
  },
  {
    title: 'CSRF',
    to: '/csrf',
  },
  {
    title: 'Clickjacking',
    to: '/clickjacking',
  },
];
const Sitebar = () => {
  return (
    <section className="sitebar">
      <h2 className="sitebar__title">Список уязвимостей</h2>
      <div className="sitebar__menu">
        <ul className="sitebar__list">
          {dataList.map(({ title, to }, index) => (
            <NavLink to={to} key={index}>
              <li className="sitebar__item">
                <span>{title}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sitebar;
