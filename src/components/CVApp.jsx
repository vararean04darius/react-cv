import { useState } from "react";
import CVEditor from './CVEditor.jsx'
import CVPreview from './CVPreview';

export default function CVApp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [finalEmail, setFinalEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [finalPhone, setFinalPhone] = useState('');
    const [city, setCity] = useState('');
    const [finalCity, setFinalCity] = useState('');


    function onSubmitPersonalForm(e) {
        setFullName(firstName + ' ' + lastName)
        setFinalEmail(email);
        setFinalCity(city);
        setFinalPhone(phone);
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
    }
    
    function onChangePhone(e) {
        setPhone(e.target.value);
    }

    function onChangeCity(e) {
        setCity(e.target.value);
    }

    return(
        <div className="splitter">
            <CVEditor 
            onSubmitPersonalForm={onSubmitPersonalForm} 
            onChangeFirst={onChangeFirst}
            onChangeLast={onChangeLast}
            onChangeEmail={onChangeEmail}
            onChangePhone={onChangePhone}
            onChangeCity={onChangeCity}
            />
            <CVPreview 
            fullName={fullName}
            email={finalEmail}
            phone={finalPhone}
            city={finalCity}
            />
        </div>
    )
}