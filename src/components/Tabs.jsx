import React from 'react';
const tabs = [
  { id: 1, value: 'unsafe', label: 'Уязвим' },
  { id: 2, value: 'safe', label: 'Защищен' },
];
export const Tabs = ({ activeTab, onChange }) => {
  return (
    <div className="tabs">
      {tabs.map(({ id, value, label }) => (
        <div
          key={id}
          className={`tab ${activeTab === value ? 'active' : ''}`}
          onClick={() => onChange(value)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};
