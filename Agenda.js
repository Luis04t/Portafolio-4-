// src/Agenda.js
import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';

const Agenda = () => {
  const [contacts, setContacts] = useState([]);

  // Función para obtener los contactos de la API
  const fetchContacts = async () => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error al obtener los contactos:", error);
    }
  };

  // Función para agregar un nuevo contacto
  const addContact = async (newContact) => {
    try {
      await fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });
      fetchContacts(); // Refrescar la lista después de agregar
    } catch (error) {
      console.error("Error al agregar el contacto:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Agenda Web</h1>
      <ContactList contacts={contacts} />
      <AddContactForm onAddContact={addContact} />
    </div>
  );
};

export default Agenda;
