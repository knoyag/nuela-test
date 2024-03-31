import React from 'react';
import Profesor from './Profesor';

const Profesores: React.FC = () => {
  return (
    <div>
      <Profesor nombre="Marta Martinez" email="marta@example.com" telefono="+34 123 456 789" fotoURL="https://fastly.picsum.photos/id/663/200/200.jpg?hmac=MzrpRFuFESictjAXjWDdc1tKVJQkRXcUjAqfOHgUiww" />
    </div>
  );
};

export default Profesores;
