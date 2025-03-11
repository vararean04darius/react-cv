import { useState } from 'react';
import Paper from './Paper';

export default function MainPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [finalEmail, setFinalEmail] = useState('');

    function onSubmitPersonalForm(e) {
        setFullName(firstName + ' ' + lastName)
        setFinalEmail(email);
        e.preventDefault();
    }

    function onChangeFirst(e) {
        setFirstName(e.target.value);
    }

    function onChangeLast(e) {
        setLastName(e.target.value);
    }

    function onChangeEmail(e) {
        setEmail(e.target.value);
        e.preventDefault();
    }

    // let email = "salutmanumescionutsiamunmailfoartelung@gmail.com"
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
                    <label> E-mail 
                        <input type="text" onChange={onChangeEmail}/>
                    </label>
                    <label> Phone number 
                        <input type="tel"/>
                    </label>
                    <label> City
                        <input type="text"/>
                    </label>
                    <button onClick={onSubmitPersonalForm}>Confirm info</button>
                </form>
            </div>
            <div className='paper-display'>
                <Paper fullName={fullName} email={finalEmail}/>
            </div>
        </div>
        
    )
}