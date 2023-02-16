import React from 'react';
import SafeImg from 'assets/images/safe.png';
import UnsafeImg from 'assets/images/unsafe.png';
import PropTypes from 'prop-types';
import './Tabs.style.scss';
const tabs = [
  { id: 1, value: 'unsafe', img: UnsafeImg },
  { id: 2, value: 'safe', img: SafeImg },
];
export const Tabs = ({ activeTab, onChange }) => {
  return (
    <div className="tabs">
      {tabs.map(({ id, value, img }) => (
        <div
          key={id}
          className={`tab ${activeTab === value ? 'active' : ''}`}
          onClick={() => onChange(value)}
        >
          <img src={img} alt="tab-img" />
        </div>
      ))}
    </div>
  );
};
Tabs.propTypes = {
  activeTab: PropTypes.oneOf(['safe', 'unsafe']),
  onChange: PropTypes.func,
};
