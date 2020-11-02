import contactsReducers from './contacts/contactsReducers';
import warningMessage from './warning/warningMessageReducers';
import { configureStore } from '@reduxjs/toolkit';

// const reducer =

const preloadedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    message: warningMessage,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
