import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactSlice';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
