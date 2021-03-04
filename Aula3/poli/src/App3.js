import Form from './Form';
import Input from './Input';

import { useState } from 'react';

const App3 = () => {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    const changeFieldHandler = func => evt => func(evt.target.value);

    const submitHandler = () => {
        console.log(JSON.stringify({ nome, idade }));
    }

    return (
        <Form>
            <Input
                type='text'
                label='nome'
                value={nome}
                onChange={changeFieldHandler(setNome)}
            />
            <Input
                type='number'
                label='idade'
                value={idade}
                onChange={changeFieldHandler(setIdade)}
            />
            <button onClick={submitHandler}>Submit</button>
        </Form>
    );

};

export default App3;