import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';

export default function Register() {
  const error = useSelector(selectError);

  return (
    <div>
      <title>Registration</title>
      <RegisterForm />
      {error && <h1>aaaaaaaaaaaaaaaaaaaaadasdasda</h1>}
    </div>
  );
}
