//1. Prikaži poruku u konzoli prilikom prvog renderiranja komponente.
import React, { useEffect } from 'react';

const Task10: React.FC = () => {
    useEffect(() => {
        console.log("Komponenta je renderovana prvi put");
    }, []);

    return (
        <div className='Task'>
            <h1>Task1 Komponenta</h1>
        </div>
    );
};

export default Task10;
