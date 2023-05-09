import React from 'react';

export const UiField = ({
  title,
  type,
  value,
  onChange,
  autoComplete,
  variant = 'input', //input | textarea
}) => {
  return (
    <div className="ui-field">
      <h3 className="ui-field__title">{title}</h3>
      {variant === 'input' && (
        <input
          type={type}
          className="ui-field__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
        />
      )}
      {variant === 'textarea' && (
        <textarea
          rows={5}
          type={type}
          className="ui-field__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
        />
      )}
    </div>
  );
};
