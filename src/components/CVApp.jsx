/* eslint-disable no-unused-vars */
 
import { useState } from "react";
import CVEditor from './CVEditor.jsx'
import CVPreview from './CVPreview';

export default function CVApp() {
    //personal information
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [finalEmail, setFinalEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [finalPhone, setFinalPhone] = useState('');
    const [city, setCity] = useState('');
    const [finalCity, setFinalCity] = useState('');
    const [role, setRole] = useState('');
    const [finalRole, setFinalRole] = useState('');

    function onSubmitPersonalForm(e) {
        setFullName(firstName + ' ' + lastName)
        setFinalEmail(email);
        setFinalCity(city);
        setFinalPhone(phone);
        setFinalRole(role);
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

    function onChangeRole(e) {
        setRole(e.target.value);
    }

    //education
    const [educationArray, setEducationArray] = useState([{education: "bachelor", school: "school", city: "Bucharest", startDate: "15.09.2018", endDate: "20.06.2022"}]);
    const [finalEducationArray, setFinalEducationArray] = useState([]);

    function onAddEducation(e) {
        setEducationArray([...educationArray, {education: "", school: "", city: "", startDate: "", endDate: ""}]);
        e.preventDefault();
    }

    function onRemoveEducation(e, index) {
        const list = [...educationArray];
        list.splice(index, 1);
        setEducationArray(list);
        e.preventDefault();
    }

    function onChange(e, index) {
        const name = e.target.name;
        const value = e.target.value;
        const list = [...educationArray];
        console.log(e.target);
        console.log(list);
        console.log(index);
        
        list[index][name] = value;
        setEducationArray(list);
    }

    function onSubmitEducation(e) {
        let newArray = JSON.parse(JSON.stringify(educationArray));
        setFinalEducationArray(newArray);
        e.preventDefault();
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
            onChangeRole={onChangeRole}

            arr={educationArray}
            onAddEducation={onAddEducation}
            onRemoveEducation={onRemoveEducation}
            onChange={onChange}
            onSubmitEducation={onSubmitEducation}
            />
            <CVPreview 
            fullName={fullName}
            email={finalEmail}
            phone={finalPhone}
            city={finalCity}
            role={finalRole}
            arr={finalEducationArray}
            />
        </div>
    )
}