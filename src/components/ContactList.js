import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './ContactSlice';
import { removeContact } from './ContactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error, filter } = useSelector(
    state => state.contacts
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredItems = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(removeContact(id))
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {filteredItems.map(contact => (
        <li key={contact.id}>
          <strong>{contact.name}</strong> - {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
