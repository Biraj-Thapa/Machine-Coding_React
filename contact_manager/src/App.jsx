import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import uuid4 from "uuid4";
const App = () => {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey))|| [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);
  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  };
  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedList);
  };
  return (
    <div>
      <Header />
      <AddContacts addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
};

export default App;
