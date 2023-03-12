import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
    private:false,
  },
  {
    id: nanoid(),
    text: 'Contacts',
    link: '/my-contacts',
    private: true,
  },
];

export default items;
