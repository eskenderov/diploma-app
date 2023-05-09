import React, { useCallback, useEffect, useState } from 'react';
import { postNewComment, getCommentAll } from 'services/api/comments';
import styled from 'styled-components';
import { sanitize } from 'dompurify';
import { UiField } from 'shared/ui/UiField';
import { UiButton } from 'shared/ui/UiButton';

const INIT_STATE = {
  author: '',
  text: '',
};
export const Comments = ({ tab }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ ...INIT_STATE });
  const [error, setError] = useState({
    author: '',
    text: '',
  });
  // const hasError = error.author.length > 0 || error.text.length > 0;
  const hasError = false;
  const onInputChange = ({ nameField, value }) => {
    setValues((prevState) => ({
      ...prevState,
      [nameField]: value,
    }));
    switch (nameField) {
      case 'author':
        setError((prevError) => ({
          ...prevError,
          [nameField]: !validateAuthor(value)
            ? 'Имя автора не может содержать знаки!'
            : '',
        }));
        break;
      case 'text':
        setError((prevError) => ({
          ...prevError,
          [nameField]: !validateText(value)
            ? `Текст комментария не может содержать знаки: <, >, ', ", &.`
            : '',
        }));
        break;

      default:
        break;
    }
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    const { data } = await getCommentAll();
    setComments(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
    return () => {
      setComments([]);
      setLoading(false);
    };
  }, [setComments, setLoading, fetchData]);

  const onClear = useCallback(() => {
    setValues({ ...INIT_STATE });
  }, []);

  useEffect(() => {
    onClear();
  }, [tab, onClear]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (hasError) {
      return false;
    }
    try {
      const { author, text } = values;
      const { data } = await postNewComment({ author, text });
      addComment(data);
      onClear();
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = (comment) => {
    comments.push(comment);
  };

  function validateAuthor(input) {
    const forbiddenChars = /[^a-zA-Z0-9а-яА-ЯёЁ]/g;
    return !forbiddenChars.test(input);
  }
  function validateText(input) {
    const forbiddenChars = /[<>'"&]/g;
    return !forbiddenChars.test(input);
  }

  return (
    <div className="comments">
      <Container>
        <Title>Комментарии</Title>
        {!loading ? (
          <List>
            {tab === 'unsafe' &&
              comments.map(({ id, author, text }) => (
                // <iframe srcdoc="<script>alert('XSS attack!');</script>"  style="position: absolute;width:0;height:0;border:0;"></iframe>
                <Item key={id}>
                  <Author
                    dangerouslySetInnerHTML={{
                      __html: author,
                    }}
                  />
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: text,
                    }}
                  />
                </Item>
              ))}
            {tab === 'safe' &&
              comments.map(({ id, author, text }) => (
                <Item key={id}>
                  <Author
                    dangerouslySetInnerHTML={{
                      __html: sanitize(author),
                    }}
                  />
                  <Text>{text}</Text>
                </Item>
              ))}
          </List>
        ) : (
          <p className="loading">Loading</p>
        )}

        <Form>
          {tab === 'unsafe' && (
            <UiField
              title="Автор"
              type="text"
              value={values.author}
              onChange={(value) =>
                onInputChange({
                  nameField: 'author',
                  value,
                })
              }
              autoComplete="one-time-code"
            />
          )}
          {tab === 'safe' && (
            <UiField
              title="Логин"
              type="text"
              value={values.author}
              onChange={(value) =>
                onInputChange({
                  nameField: 'author',
                  value,
                })
              }
            />
          )}

          {error.author && <p className="error-text">{error.author}</p>}

          {tab === 'unsafe' && (
            <UiField
              variant="textarea"
              title="Текст"
              type="text"
              value={values.text}
              onChange={(value) =>
                onInputChange({
                  nameField: 'text',
                  value,
                })
              }
            />
          )}
          {tab === 'safe' && (
            <UiField
              variant="textarea"
              title="Текст"
              type="text"
              value={values.text}
              onChange={(value) =>
                onInputChange({
                  nameField: 'text',
                  value,
                })
              }
            />
          )}

          {error.text && <p className="error-text">{error.text}</p>}
          <UiButton
            label="Отправить"
            disabled={hasError}
            onClick={onSubmit}
            type="submit"
          />
        </Form>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 330px;
  padding: 20px 10px 10px;
`;
const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  max-height: 324px;
  overflow: auto;
`;
const Item = styled.li`
  padding: 12px;
  background-color: aliceblue;
  border-radius: 8px;
`;
const Author = styled.div`
  font-size: 17px;
  margin-bottom: 4px;
`;
const Text = styled.p`
  font-size: 14px;
`;
const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Textarea = styled.textarea`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #000;
  font-size: inherit;
  resize: none;
`;
const Input = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  font-size: inherit;
  resize: none;
`;
const Button = styled.button`
  width: 100%;
`;
