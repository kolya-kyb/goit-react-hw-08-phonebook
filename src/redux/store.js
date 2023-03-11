import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';

import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactsSlice,
    filter: filterSlice,
  },
});
