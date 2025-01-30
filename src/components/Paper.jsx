
import '../styles/paper.css';
import palacean from '../assets/palacean.png';
import mailIcon from '../assets/mail.svg';

export default function Paper(props) {

    // const fullName = props.firstName + ' ' + props.lastName;

    console.log(props);

    return (
        <div className="paper-container">
            <div className="a4-paper">
                <div className='sidebar-container'>
                    <div className='picture-container-wrapper'>
                        <div className='picture-container'>
                            <img src={palacean} alt="" className='photo'/>
                        </div>
                    </div>
                    <div className='name-and-headline'>
                        <h2>{props.fullName}</h2>
                        <h3>Headline</h3>
                    </div>
                    <div className='personal-details-container'>
                        <h2>Personal details</h2> 
                        {/* {props.firstName != '' ? <p>{props.firstName}</p> : <p>First name is missing</p>}
                        {props.lastName != '' ? <p>{props.lastName}</p> : <p>Last name is missing</p>} */}
                        <div className='icon-and-text-container'>
                            <img className='icon' src={mailIcon} alt="" />
                            <p>{props.email}</p>
                        </div>
                        <p>Phone number</p>
                        <p>Address</p>
                        <p>Postal code</p>
                        <p>City</p>
                    </div>
                    <div className='skills-details-container'>
                        <h2>Skills</h2>
                        <p>teamwork</p>
                        <p>communication</p>
                        <p>problem solving</p>
                    </div>
                    <div className='languages-details-container'>
                        <h2>Languages</h2>
                        <p>English</p>
                    </div>
                    <div className='hobbies-details-container'>
                        <h2>Hobbies</h2>
                        <p>Working out</p>
                    </div>
                </div>
                <div className='main-description'>
                    <h2>hello world</h2>
                    <h2>In here I will put some details about my education and my past experiences, in case this gets too long, it breaks the line</h2>
                </div>
            </div>
        </div>
    )
}