//3. Postavi naslov dokumenta na temelju stanja.
import React, { useState, useEffect } from 'react';

const Task12: React.FC = () => {
    const [title, setTitle] = useState("Početni naslov");

    useEffect(() => {
        document.title = title;
    }, [title]); // useEffect se pokreće kad god se `title` promeni

    const handleChangeTitle = () => {
        setTitle(`Novi naslov ${Math.floor(Math.random() * 100)}`);
    };

    return (
        <div className='Task'>
            <h1>Task3 Komponenta</h1>
            <p>Trenutni naslov dokumenta: {title}</p>
            <button onClick={handleChangeTitle}>Promjeni naslov</button>
        </div>
    );
};

export default Task12;