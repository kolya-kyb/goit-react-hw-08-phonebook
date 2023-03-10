import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://63ff2758571200b7b7d6c2cc.mockapi.io',
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/contacts');
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await instanceContacts.delete(`/contacts/${id}`);
  return data;
};

export const requestAddContacts = async ({ name, number }) => {
  const { data } = await instanceContacts.post('/contacts', {
    name,
    phone: number,
  });
  return data;
};
