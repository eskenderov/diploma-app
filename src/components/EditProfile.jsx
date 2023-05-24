import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { getCSRFToken } from 'services/api/token';
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

  const clearState = () => {
    setValues({
      new_username: '',
      prev_password: '',
      new_password: '',
    });
    setError(null);
    setResult(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let token = undefined;
      if (!disabledToken) {
        token = await getCSRFToken();
      }

      const { data } = await editUser({
        type: tab,
        username: values.new_password,
        password: values.new_password,
        token: token?.data.csrfToken,
      });

      if (data.message) toast.success(data.message, { autoClose: 3000 });

      clearState();
    } catch (error) {
      toast.error('Недопустимый токен CSRF', {
        autoClose: 3000,
      });
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
          {result && <div className="text success-text">{result}</div>}
          {error && <div className="error-text">{error}</div>}
          <UiButton label="Изменить" onClick={onSubmit} />
          <div className="tab"></div>
        </div>
      </form>
    </div>
  );
};
