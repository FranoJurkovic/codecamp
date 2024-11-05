//Napiši React komponentu koja prima ime i prezime kao props i ispisuje ih. 
import React from "react";

interface KorisnikProps {
  ime: string;
  prezime: string;
}

const Task6: React.FC<KorisnikProps> = ({ ime, prezime }) => {
  return (
    <div className='Task'>
      <p>Ime: {ime}, Prezime: {prezime}</p>
    </div>
  );
};

export default Task6;