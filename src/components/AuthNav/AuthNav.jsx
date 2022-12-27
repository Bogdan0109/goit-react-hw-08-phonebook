import Link from 'components/Link/Link';
import './AuthNav.scss';

export const AuthNav = () => {
  return (
    <div>
      <Link className="link" to="/register">
        Register
      </Link>
      <Link className="link" to="/login">
        Log In
      </Link>
    </div>
  );
};
