import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';

import { ListWrapper } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const loader = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  const contactItem = getFilteredContacts().map(({ id, name, number }) => (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </li>
  ));
  return (
    <ListWrapper>
      {loader ? <span>Loading...</span> : <ul>{contactItem}</ul>}
      {error && <span>{error}</span>}
    </ListWrapper>
  );
};

export default ContactList;
