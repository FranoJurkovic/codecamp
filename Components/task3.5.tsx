//5. Kreirati komponentu koja će sadržati input polje, a kada korisnik klikne na dugme, fokus će se automatski postaviti na to input polje.
import React, { useRef } from 'react';

const Task14: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h1>Task5 Komponenta</h1>
            <input ref={inputRef} type="text" placeholder="Unesite tekst ovde" />
            <button onClick={handleFocus}>Postavi fokus</button>
        </div>
    );
};

export default Task14;