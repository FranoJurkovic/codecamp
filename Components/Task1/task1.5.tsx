//Napisi React kompomentu koja prima props ime, prezime, godina rođenja, te ih ispisuje u paragraph, sa izračunatim brojem godina (koristiti new Date).
import React from 'react';

interface InfoProps {
  ime: string;
  prezime: string;
  godinaRođenja: number;
}

const Task5: React.FC<InfoProps> = ({ ime, prezime, godinaRođenja }) => {
  // Izračunavanje trenutne dobi korisnika
  const trenutnaGodina = new Date().getFullYear();
  const godine = trenutnaGodina - godinaRođenja;

  return (
    <div className='Task'>
      <p>Ime: {ime}</p>
      <p>Prezime: {prezime}</p>
      <p>Godina rođenja: {godinaRođenja}</p>
      <p>Broj godina: {godine}</p>
    </div>
  );
};

export default Task5;