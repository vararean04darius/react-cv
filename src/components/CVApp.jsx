 
import React, { useState } from "react";
import CVEditor from './CVEditor.jsx'
import CVPreview from './CVPreview';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export default function CVApp() {
    //personal information
    const [activeForm, setActiveForm] = useState('1');
    const [myAvatar, setMyAvatar] = useState([]);
    
    const printRef = React.useRef(null);

    const printAction = async () => {
        const element = printRef.current;
        console.log(element);
        

        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png')

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: 'a4',
        })

        const imgProperties = pdf.getImageProperties(data);
        const height = imgProperties.height;
        const width = imgProperties.width;

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (height * pdfWidth) / width;

        

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight )
        pdf.save("yourcv.pdf")

    }

    const [personalArray, setPersonalArray] = useState([{
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@outlook.com',
        phone: '+68297738293',
        city: 'Budapest',
        appliedPosition: 'Software Developer'
    }]);
    const [finalPersonalArray, setFinalPersonalArray] = useState([{
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@outlook.com',
        phone: '+68297738293',
        city: 'Budapest',
        appliedPosition: 'Software Developer'
    }]);

    function onSubmitPersonal(e) {
        let newArray = JSON.parse(JSON.stringify(personalArray));
        setFinalPersonalArray(newArray);
        e.preventDefault();
    }

    function onChangePersonal(e, index) {
        const name = e.target.name;
        const value = e.target.value;
        const list = [...personalArray];
        
        list[index][name] = value;
        setPersonalArray(list);
    }

    function onChangeMyAvatar(e) {
        setMyAvatar(URL.createObjectURL(e.target.files[0]));
        console.log("avatar input change detected");
        console.log(e.target.files);

        e.preventDefault();
    }

    //education
    const [educationArray, setEducationArray] = useState([{
        education: "bachelor", 
        school: "school", 
        city: "Bucharest", 
        startDate: "15.09.2018", 
        endDate: "20.06.2022"}]);
    const [finalEducationArray, setFinalEducationArray] = useState([{
        education: "bachelor", 
        school: "school", 
        city: "Bucharest", 
        startDate: "15.09.2018", 
        endDate: "20.06.2022"}]);

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

    function onChangeEducation(e, index) {
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

    //prev experience
    const [experienceArray, setExperienceArray] = useState([{
        position: "UI/UX designer", 
        employer: "Google", 
        startDate:"12.03.2022", 
        endDate:"26.09.2024", 
        description:"During my time at Google I learned a lot of precious things about UI/UX."}])
    const [finalExperienceArray, setFinalExperienceArray] = useState([{
        position: "UI/UX designer", 
        employer: "Google", 
        startDate:"12.03.2022", 
        endDate:"26.09.2024", 
        description:"During my time at Google I learned a lot of precious things about UI/UX."}])

    function onAddExperience(e) {
        setExperienceArray([...experienceArray, {position: "", 
            employer: "", 
            startDate:"", 
            endDate:"", 
            description:""}]);
        e.preventDefault();
    }

    function onRemoveExperience(e, index) {
        const list = [...experienceArray]
        list.splice(index, 1)
        setExperienceArray(list);
        e.preventDefault();
    }

    function onChangeExperience(e, index) {
        const name = e.target.name;
        const value = e.target.value;
        
        const list = [...experienceArray]
        list[index][name] = value;
        setExperienceArray(list);
        e.preventDefault();
    }

    function onSubmitExperience(e) {
        let newArray = JSON.parse(JSON.stringify(experienceArray));
        setFinalExperienceArray(newArray);
        e.preventDefault();
    }
    return(
        <div className="splitter">
            <CVEditor 
            activeForm={activeForm}
            setActiveForm={setActiveForm}
            onChangeMyAvatar={onChangeMyAvatar}
            printAction={printAction}
            //personal info
            personalArray={personalArray}
            onSubmitPersonal={onSubmitPersonal} 
            onChangePersonal={onChangePersonal}
            myAvatar={myAvatar}

            //education
            educationArray={educationArray}
            onAddEducation={onAddEducation}
            onRemoveEducation={onRemoveEducation}
            onChangeEducation={onChangeEducation}
            onSubmitEducation={onSubmitEducation}

            //prev experience
            experienceArray={experienceArray}
            onAddExperience={onAddExperience}
            onRemoveExperience={onRemoveExperience}
            onChangeExperience={onChangeExperience}
            onSubmitExperience={onSubmitExperience}
            />
            <CVPreview 
            printRef={printRef}
            peArr={finalPersonalArray}
            edArr={finalEducationArray}
            exArr={finalExperienceArray}
            myAvatar={myAvatar}
            />
        </div>
    )
}