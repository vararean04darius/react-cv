import { useState } from 'react';
import Paper from './Paper';

export default function MainPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function onSubmitForm(e) {
        setFullName(firstName + ' ' + lastName)
        // fullName = firstName + ' ' + lastName;
        // alert("full name is now " + fullName);
        e.preventDefault();
    }

    function onChangeFirst(e) {
        setFirstName(e.target.value);
    }

    function onChangeLast(e) {
        setLastName(e.target.value);
    }

    let email = "salutmanumescionutsiamunmailfoartelung@gmail.com"
    return(
        <div className='splitter'>
            <div className='personal-form'>
                <form className="form-container" action="">
                    <label> First Name 
                        <input type="text" onChange={onChangeFirst}/>
                    </label>
                    <label> Last Name 
                        <input type="text" onChange={onChangeLast}/>
                    </label>
                    <button onClick={onSubmitForm}>Confirm info</button>
                </form>
            </div>
            <div className='paper-display'>
                <Paper fullName={fullName} email={email}/>
            </div>
        </div>
        
    )
}