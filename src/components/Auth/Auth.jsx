import { useState } from 'react';
import { Wrap } from './Auth.styled';
import { LoginForm, RegisterForm } from 'components';

export const Auth = ({ onClose }) => {
  const [form, setForm] = useState('login');

  const getButtonStyle = buttonType => {
    return form === buttonType ? { color: 'blue', textDecoration: 'underline' } : {};
  };

  return (
    <>
      {form === 'register' && <RegisterForm onClose={onClose} />}
      {form === 'login' && <LoginForm onClose={onClose} />}
      <Wrap>
        <button style={getButtonStyle('login')} onClick={() => setForm('login')}>
          Увійти
        </button>
        <button style={getButtonStyle('register')} onClick={() => setForm('register')}>
          Зареєструватися
        </button>
      </Wrap>
    </>
  );
};
