import axios from 'axios';

const ApiContacts = axios.create({
  baseURL: 'https://65e0c92cd3db23f7624a143a.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await ApiContacts.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await ApiContacts.post('/contacts', contact);
  return data;
};

export const deleteContacts = async id => {
  console.log(id);
  const { data } = await ApiContacts.delete(`/contacts/${id}`);
  return data;
};
