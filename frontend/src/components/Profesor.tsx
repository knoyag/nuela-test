import React from 'react';

const Profesor: React.FC<{ nombre: string; email: string; telefono: string; fotoURL: string }> = ({ nombre, email, telefono, fotoURL }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <img src={fotoURL} alt={`Foto de ${nombre}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        </div>
        <div>
          <h4>{nombre}</h4>
          <p>Email: {email}</p>
          <p>Teléfono: {telefono}</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a href="#" className="edit-link" style={{ color: '#6f42c1' }}>Editar</a>
      </div>
      <hr />
    </div>
  );
};

export default Profesor;
