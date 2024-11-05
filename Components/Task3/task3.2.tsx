//2. Dodajte stanje(useState) i koristite useEffect za praćenje promjena tog stanja.
import React, { useState, useEffect } from 'react';

const Task11: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Stanje se promenilo:", count);
    }, [count]); // useEffect prati promene `count` stanja

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div className='Task'>
            <h1>Task2 Komponenta</h1>
            <p>Trenutno stanje: {count}</p>
            <button onClick={handleIncrement}>Povećaj</button>
        </div>
    );
};

export default Task11;