import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  deleteContacts,
} from '../ApiContacts/ApiContacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  return getContacts();
});

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    return addContacts(contact);
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return deleteContacts(id);
  }
);

export const setFilter = createAsyncThunk(
  'contacts/setFilter',
  async filter => {
    return filter;
  }
);

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(setFilter.fulfilled, (state, action) => {
        state.filter = action.payload;
      });
  },
});

export const contactsActions = ContactSlice.actions;
export default ContactSlice.reducer;
