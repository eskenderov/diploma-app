import React, { useState } from 'react';
import { editUser } from 'services/api/users';
import { UiButton } from 'shared/ui/UiButton';
import { UiField } from 'shared/ui/UiField';

export const EditProfile = ({ tab, disabledToken }) => {
  const [values, setValues] = useState({
    new_username: '',
    prev_password: '',
    new_password: '',
  });
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const onInputChange = ({ nameField, value }) => {
    setValues((prevState) => ({
      ...prevState,
      [nameField]: value,
    }));
    setError(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (disabledToken) {
        localStorage.removeItem('csrfToken');
      }
      const { data } = await editUser({ type: tab });
      setResult(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="edit-profile">
      <form className="edit-profile__form">
        <div className="edit-profile__card">
          <UiField
            title="Новый юзернейм"
            type="text"
            value={values.new_username}
            onChange={(value) =>
              onInputChange({
                nameField: 'new_username',
                value,
              })
            }
            autoComplete="one-time-code"
          />
          <UiField
            title="Cтарый пароль"
            type="text"
            value={values.prev_password}
            onChange={(value) =>
              onInputChange({
                nameField: 'prev_password',
                value,
              })
            }
            autoComplete="one-time-code"
          />
          <UiField
            title="Новый пароль"
            type="text"
            value={values.new_password}
            onChange={(value) =>
              onInputChange({
                nameField: 'new_password',
                value,
              })
            }
            autoComplete="one-time-code"
          />
          {result && <div className="text">{result}</div>}
          {error && <div className="error-text">{error}</div>}
          <UiButton label="Изменить" onClick={onSubmit} />
        </div>
      </form>
    </div>
  );
};
