// src/ContactList.js
import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contactos Guardados</h2>
      {contacts.map((contact, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <p><strong>Nombre:</strong> {contact.nombre}</p>
          <p><strong>Apellido:</strong> {contact.apellido}</p>
          <p><strong>Teléfono:</strong> {contact.telefono}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
