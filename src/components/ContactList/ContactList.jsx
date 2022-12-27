import './ContactList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'redux/filter/selectors';
import { selectAllContacts, selectLoading } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';
import { AiFillDelete } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

export const ContactList = () => {
  const filter = useSelector(selectFilters);
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const Loading = useSelector(selectLoading);

  if (!contacts) return;

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className="ContactList">
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className="ContactList__item">
            <div className="ContactList__user">
              <BsTelephone />
              <p className="ContactList__text">{name}:</p>
            </div>
            <span className="ContactList__span">{number}</span>
            <button
              type="button"
              className="ContactList__btn"
              onClick={() => dispatch(deleteContacts(id))}
              disabled={Loading}
            >
              <AiFillDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
