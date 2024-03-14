import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { ButtonForm, Form, InputForm, LabelForm } from './RegisterForm.styled';

export const RegisterForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
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
        title="Password must be at least 8 characters long"
        required
      />

      <ButtonForm type="submit">Прийняти</ButtonForm>
    </Form>
  );
};
