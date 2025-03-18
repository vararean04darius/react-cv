/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import '../styles/paper.css';
import cvAvatar from '../assets/paloma.png';
import mailIcon from '../assets/mail.svg';
import phoneIcon from '../assets/phone.svg';
import cityIcon from '../assets/location.svg'

export default function CVPreview(props) {

    const fullName = props.firstName + ' ' + props.lastName;
    let edArr = Array.from(props);
    edArr.forEach(element => {
        console.log(element);
    });
    console.log(props);

    let educations = Array.from(props.edArr)
    let experiences = Array.from(props.exArr)
    

    return (
        <div className="paper-container">
            <div className="a4-paper">
                <div className='sidebar-container'>
                    <div className='bookmark'>
                        <div className='picture-container-wrapper'>
                            <div className='picture-container'>
                                <img src={props.myAvatar} alt="" className='photo'/>
                            </div>
                        </div>
                        <div className='name-and-headline'>
                            <h2>{props.fullName}</h2>
                            <h3>{props.role}</h3>
                        </div>
                    </div>
                     
                    <div className='personal-details-container'>
                        <h2>Personal details</h2> 
                        {
                            props.email != '' ? 
                            (<div className='icon-and-text-container'>
                                <img className='icon' src={mailIcon} alt="" />
                                <p>{props.email}</p>
                            </div>)
                            : (props.email)
                        }
                        {
                            props.phone != '' ? 
                            (<div className='icon-and-text-container'>
                                <img className='icon' src={phoneIcon} alt="" />
                                <p>{props.phone}</p>
                            </div>)
                            : (props.phone)
                        }
                        {
                            props.city != '' ? 
                            (<div className='icon-and-text-container'>
                                <img className='icon' src={cityIcon} alt="" />
                                <p>{props.city}</p>
                            </div>)
                            : (props.city)
                        }
                    </div>
                </div>
                <div className='main-description'>
                    <h2 className='title'>Education</h2>
                    {
                        educations.map((item, index) => (
                            <div key={index} className="education-display">
                                <h2>{item.education}</h2>
                                <h2>{item.school}, {item.city}</h2>
                                <h2>{item.startDate} until {item.endDate}</h2>
                            </div>
                        ))
                    }
                    <hr />
                    <h2 className='title'>Previous experience</h2>
                    {
                        experiences.map((item, index) => (
                            <div key={index} className='experience-display'>
                                <h2>{item.position} at {item.employer}</h2>
                                <h2>{item.startDate} until {item.endDate}</h2>
                                <h2>{item.description}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}