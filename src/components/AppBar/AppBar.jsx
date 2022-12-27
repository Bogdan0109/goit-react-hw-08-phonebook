import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import './AppBar.scss';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* {!isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
