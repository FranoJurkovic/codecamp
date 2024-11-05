//Napiši komponentu koja prima godina (godine) kao props i ispisuje različitu poruku ovisno o tome je li osoba mlađa ili starija od 18 godina.
import React from 'react';

interface GodineProps {
  godina: number;
}

const Task1: React.FC<GodineProps> = ({ godina }) => {
  return (
    <div className='Task'>
      {godina < 18 ? (
        <p>Osoba je mlađa od 18 godina.</p>
      ) : (
        <p>Osoba je punoljetna.</p>
      )}
    </div>
  );
};

export default Task1;
