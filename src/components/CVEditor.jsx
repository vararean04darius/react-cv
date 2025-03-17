/* eslint-disable react/prop-types */

export default function CVEditor(props) {

    return(
        <div className="forms-container">
            {/* this should be a toggler for 3 forms, only 1 can be displayed at a time */}
            <div className='form' id="personal-form">
                <form className="form-container" action="">
                    <h2>Personal details</h2>
                    <label> Your picture
                        <input type="file" onChange={props.onChangeMyAvatar}/>
                    </label>
                    <label> First Name 
                        <input type="text" onChange={props.onChangeFirst}/>
                    </label>
                    <label> Last Name 
                        <input type="text" onChange={props.onChangeLast}/>
                    </label>
                    <label> E-mail 
                        <input type="text" onChange={props.onChangeEmail}/>
                    </label>
                    <label> Phone number 
                        <input type="tel" onChange={props.onChangePhone}/>
                    </label>
                    <label> City
                        <input type="text" onChange={props.onChangeCity}/>
                    </label>
                    <label> Job role
                        <input type="text" onChange={props.onChangeRole}/>
                    </label>
                    <button onClick={props.onSubmitPersonalForm}>Confirm</button>
                </form>
            </div>
            <div className="form" id="education-form">
                <form className="form-container" action="">
                    <h2>Education</h2>
                    {props.educationArray.map((item, index) => (
                        <div className="form-container" key={index}>
                            <label> Education
                                <input name="education" type="text" value={item.education} onChange={(e) => props.onChangeEducation(e, index)} required/>
                            </label>
                            <label> School
                                <input name="school" type="text" value={item.school} onChange={(e) => props.onChangeEducation(e, index)} required/>
                            </label>
                            <label> City
                                <input name="city" type="text" value={item.city} onChange={(e) => props.onChangeEducation(e, index)} required/>
                            </label>
                            <label> Start date
                                <input name="startDate" type="text" value={item.startDate} onChange={(e) => props.onChangeEducation(e, index)} required/>
                            </label>
                            <label> End date
                                <input name="endDate" type="text" value={item.endDate} onChange={(e) => props.onChangeEducation(e, index)} required/>
                            </label>
                            {props.educationArray.length > 1 && 
                                <button className="right" onClick={ (e) => {
                                    props.onRemoveEducation(e, index)
                                }}>remove</button>
                            }
                            {props.educationArray.length - 1 === index && props.educationArray.length < 3 &&
                                <button onClick={props.onAddEducation}>grow</button>
                            }
                        </div>
                    ))}
                    <button onClick={props.onSubmitEducation}>Confirm</button>
                </form>
            </div>
            <div className="form" id="experience-form">
                <form className="form-container" action="">
                    <h2>Previous experience</h2>
                    {props.experienceArray.map((item, index) => (
                        <div className="form-container" key={index}>
                            <label> Position
                                <input name="position" type="text" value={item.position} onChange={(e) => props.onChangeExperience(e, index)} required/>
                            </label>
                        </div>
                    ))}
                    <button onClick={props.onSubmitExperience}>Confirm</button>
                </form>
            </div>
        </div>
    )
}