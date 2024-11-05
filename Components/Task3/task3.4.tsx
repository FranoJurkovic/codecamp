//4. Kreirajte tajmer koji se ažurira, ali ne izaziva ponovno renderiranje.
import React, { useEffect, useRef } from 'react';

const Task13: React.FC = () => {
    const timerRef = useRef<number>(0); // čuva vrednost tajmera bez renderovanja
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            timerRef.current += 1;
            console.log("Trenutna vrednost tajmera:", timerRef.current);
        }, 1000);

        // Očisti interval kada se komponenta demontira
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className='Task'>
            <h1>Task4 Komponenta</h1>
            <p>Otvori konzolu za praćenje ažuriranja tajmera.</p>
        </div>
    );
};

export default Task13;