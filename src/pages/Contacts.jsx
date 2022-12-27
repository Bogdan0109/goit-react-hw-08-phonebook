import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Wrapper } from 'components/App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <Wrapper className="Reviews">
        <Section title={'Phonebook'}>
          <ContactForm />
        </Section>
        <Section title={'Contacts'}>
          <Filter />
          {/* {isLoading && <div>Request in progress...</div>} */}
          <ContactList />
        </Section>
      </Wrapper>
    </>
  );
}
