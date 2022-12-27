import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import './UserMenu.scss';
import { ImExit } from 'react-icons/im';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="wrapper">
      <p className="username">Welcome, {user.name}</p>
      <button
        className="btn-exit"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <ImExit size={18} />
      </button>
    </div>
  );
};
