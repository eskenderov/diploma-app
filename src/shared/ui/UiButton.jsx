import React from 'react';

export const UiButton = ({ label, onClick, type }) => {
  return (
    <button type={type} className="ui-button" onClick={onClick}>
      {label}
    </button>
  );
};
