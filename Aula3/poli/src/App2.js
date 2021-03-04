import { useEffect, useState } from 'react';
import Card from './Card';

const toJson = resp => resp.json();

const App2 = () => {

    const [time, setTime] = useState([]);

    useEffect(() => {

        fetch('time.json')
            .then(toJson)
            .then(setTime)
            .catch(console.error);

    }, []);

    return (
        <>
            { time.map((prof, i) => <Card key={i} professor={prof} />)}
        </>
    );
}

export default App2;