//Napravite komponentu koja koris3 useState za kontrolu checkbox-a. Koris3te useState za pohranu boolean vrijednos3 (true/false). 
//Dodajte checkbox i povežite njegov checked atribut s useState. Prikazujte poruku koja se mijenja ovisno o stanju checkbox-a. 
import React, { useState } from 'react';

const Task8: React.FC = () => {
  // useState hook za pohranu boolean vrijednosti
  const [čekirano, setIsChecked] = useState<boolean>(false);

  // Funkcija za promjenu stanja checkbox-a
  const kontrolakvačice = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className='Task'>
      {/* Checkbox s povezanom checked vrijednošću */}
      <input type="checkbox" 
        checked={čekirano} 
        onChange={kontrolakvačice} 
      />
      {/* Prikaz poruke ovisno o stanju checkbox-a */}
      <p>{čekirano ? 'Checkbox je označen.' : 'Checkbox nije označen.'}</p>
    </div>
  );
};

export default Task8;
