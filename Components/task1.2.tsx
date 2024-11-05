//Kreiraj komponentu koja prima temperaturu kao props i prikazuje poruku "Toplo" ili "Hladno" ovisno o vrijednosti temperature.
import React from 'react';

interface TemperaturaProps {
  temperatura: number;
}

const Task2: React.FC<TemperaturaProps> = ({ temperatura }) => {
  return (
    <div className='Task'>
      {temperatura >= 20 ? (
        <p>Toplo</p>
      ) : (
        <p>Hladno</p>
      )}
    </div>
  );
};

export default Task2;