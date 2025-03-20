/* eslint-disable react/prop-types */

import '../styles/paper.css';
import mailIcon from '../assets/mail.svg';
import phoneIcon from '../assets/phone.svg';
import cityIcon from '../assets/location.svg'

export default function CVPreview(props) {

    let personal = Array.from(props.peArr)
    const fullName = personal[0].firstName + ' ' + personal[0].lastName;
    let educations = Array.from(props.edArr)
    let experiences = Array.from(props.exArr)

    return (
        <div className="paper-container">
            <div ref={props.printRef} className="a4-paper">
                <div className='sidebar-container'>
                    <div className='bookmark'>
                        <div className='picture-container-wrapper'>
                            <div className='picture-container'>
                                <img src={props.myAvatar} alt="" className='photo'/>
                            </div>
                        </div>
                        <div className='name-and-headline'>
                            <h2>{fullName}</h2>
                            <h3>{personal[0].appliedPosition}</h3>
                        </div>
                    </div>
                     
                    <div className='personal-details-container'>
                        <h2>Personal details</h2> 
                        {
                            personal[0].email != '' ? 
                            (<div className='icon-and-text-container'>
                                <img className='icon' src={mailIcon} alt="" />
                                <p>{personal[0].email}</p>
                            </div>)
                            : (personal[0].email)
                        }
                        {
                            personal[0].phone != '' ? 
                            (<div className='icon-and-text-container'>
                                <img className='icon' src={phoneIcon} alt="" />
                                <p>{personal[0].phone}</p>
                            </div>)
                            : (personal[0].phone)
                        }
                        {
                            personal[0].city != '' ? 
                            (<div className='icon-and-text-container'>
                                <img className='icon' src={cityIcon} alt="" />
                                <p>{personal[0].city}</p>
                            </div>)
                            : (personal[0].city)
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