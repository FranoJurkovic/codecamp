//Napiši React komponentu koja sadrži niz imena i ispisuje svako ime u paragrafu.
import React from 'react';

const Task7: React.FC = () => {
  const imena: string[] = ['Frano', 'Ana', 'Petar', 'Ivana'];

  return (
    <div className='Task'>
      {imena.map((ime, popis) => (
        <p key={popis}>{ime}</p>
      ))}
    </div>
  );
};

export default Task7;