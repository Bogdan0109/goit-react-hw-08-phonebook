import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import './LoginForm.scss';
// import Button from '@mui/material/Button';
// import { ThemeProvider } from '@mui/material/styles';
// import { theme } from 'components/theme/theme';

export const LoginForm = () => {
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
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Email
        <input
          className="form__input"
          type="email"
          name="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="examplepwd12345"
        />
      </label>
      <label className="label">
        Password
        <input
          className="form__input"
          type="password"
          name="password"
          required
          minLength="7"
          placeholder="Adrian Cross"
        />
      </label>
      {/* <ThemeProvider theme={theme}>
        <Button
          className="Form__btn"
          color="secondary"
          type="submit"
          variant="contained"
        >
          Log In
        </Button>
      </ThemeProvider> */}
      <button className="form__btn" type="submit">
        Log In
      </button>
    </form>
  );
};
