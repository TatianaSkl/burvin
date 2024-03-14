import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ButtonForm, Form, InputForm, LabelForm } from './LoginForm.styled';

export const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelForm htmlFor="name">Email</LabelForm>
      <InputForm type="email" name="email" title="Please enter a valid email address" required />
      <LabelForm htmlFor="number">Пароль</LabelForm>
      <InputForm
        type="password"
        name="password"
        title="Password must be at least 4 characters long"
        required
      />
      <ButtonForm type="submit">Прийняти</ButtonForm>
    </Form>
  );
};
