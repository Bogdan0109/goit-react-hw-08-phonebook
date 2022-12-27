import { useAuth } from 'hooks';
import './Navigation.scss';
import Link from 'components/Link/Link';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link className="link" to="/" end>
        Home
      </Link>
      {isLoggedIn && (
        <Link className="link" to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};
