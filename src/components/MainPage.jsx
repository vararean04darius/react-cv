import { useState } from 'react';
import Paper from './Paper';

export default function MainPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function onChangeFirst(e) {
        setFirstName(e.target.value);
    }

    function onChangeLast(e) {
        setLastName(e.target.value);
    }

    return(
        <>
        <label> First Name 
            <input type="text" onChange={onChangeFirst}/>
        </label>
        <label> Last Name 
            <input type="text" onChange={onChangeLast}/>
        </label>
        <Paper firstName={firstName} lastName={lastName}/>
        </>
    )
}