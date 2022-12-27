import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
// import Button from '@mui/material/Button';
// import { ThemeProvider } from '@mui/material/styles';
// import { theme } from 'components/theme/theme';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          className="Form__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          placeholder="Adrian Cross"
        />
      </label>
      <label className={css.label}>
        Email
        <input
          className="Form__input"
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          placeholder="examplepwd12345"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className="Form__input"
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
          Register
        </Button>
      </ThemeProvider> */}
      <button className="Form__btn" type="submit">
        Register
      </button>
    </form>
  );
};
