import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import s from './App.module.css';
import styles from './AppearHeading.module.css';
import fade from '../components/Filter/filterAppear.module.css';
import { connect } from 'react-redux';

function App({ isContacts }) {
  return (
    <>
      <div className={s.wrapperPhonebook}>
        <CSSTransition
          in={true}
          appear={true}
          classNames={styles}
          timeout={500}
          unmountOnExit
        >
          <h1 className={s.phoneBookHeading}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2 className={s.contactsHeading}>Contacts</h2>
        <CSSTransition
          in={isContacts}
          classNames={fade}
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
      </div>
      <ContactList />
    </>
  );
}

const mapStateToProps = state => ({
  isContacts: state.contacts.items.length > 0,
});

export default connect(mapStateToProps)(App);
