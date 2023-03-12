

import instance from './AuthApi';


export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const requestAddContacts = async ({ name, number }) => {
  const { data } = await instance.post('/contacts', {
    name,
    number,
  });
  return data;
};
