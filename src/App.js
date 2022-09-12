
import './App.css';
import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact'
import ContactList from './components/ContactList';

const contacts = [
  {
    'id' : "1",
    'name' : 'Tom Smith',
    'email' : 'tom.smith@gmail.com'
  },
  {
    'id' : "2",
    'name' : 'Jana Wood',
    'email' : 'jana.wood@gmail.com'
  }

]

function App() {
  return (
    <div className="ui container">
       <Header />
       <AddContact />
       <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
