// src/AddContactForm.js
import React, { useState } from 'react';

const AddContactForm = ({ onAddContact }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { nombre, apellido, telefono };
    onAddContact(newContact);
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd' }}>
      <h2>Agregar Nuevo Contacto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />
      <button type="submit">Agregar Contacto</button>
    </form>
  );
};

export default AddContactForm;
