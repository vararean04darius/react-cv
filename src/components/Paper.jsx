
import '../styles/paper.css';

export default function Paper(props) {

    let fullName = props.firstName + ' ' + props.lastName;

    console.log(props);
    return (
        <div className="paper-container">
            <div className="a4-paper">
                <div className='sidebar-container'>
                    <div className='picture-container'>
                        <img src="" alt="" className='photo'/>
                    </div>
                    <div className='personal-details-container'>
                        <h2>Personal details</h2> 
                        <hr />
                        {/* {props.firstName != '' ? <p>{props.firstName}</p> : <p>First name is missing</p>}
                        {props.lastName != '' ? <p>{props.lastName}</p> : <p>Last name is missing</p>} */}
                        <h3>{fullName}</h3>
                        <hr />
                    </div>
                    {/* <h2>{props.lastName}</h2> */}
                </div>
                <div className='main-description'>
                    <h2>hello world</h2>
                    <h2>In here I will put some details about my education and my past experiences, in case this gets too long, it breaks the line</h2>
                </div>
            </div>
        </div>
    )
}