import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Label } from './Filter.styled';
import { addNewContact } from './ContactSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = () => {
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();

    if (!trimmedName || !trimmedNumber) {
      return;
    }

    const newContact = {
      name: trimmedName,
      number: trimmedNumber,
    };

    dispatch(addNewContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <div>
      <Label>
        Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Label>

      <Label>
        Number
        <input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </Label>

      <Button onClick={handleAddContact} disabled={!name || !number}>
        Add Contact
      </Button>
    </div>
  );
};

export default ContactForm;
