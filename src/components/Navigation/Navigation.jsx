import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import Link from 'components/Link/Link';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link className={css.link} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className={css.link} to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};
