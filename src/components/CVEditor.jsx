/* eslint-disable react/prop-types */

export default function CVEditor(props) {

    return(
        <div className="container">
            <div className="print">
                <button>print</button>
            </div>
            <div className="forms-container">
                <div className="toggler-container">
                    <button className="toggler" id="pers-button" onClick={() => {props.setActiveForm(1)}}>Personal Information</button>
                    <button className="toggler" id="educ-button" onClick={() => {props.setActiveForm(2)}}>Education</button>
                    <button className="toggler" id="prev-button" onClick={() => {props.setActiveForm(3)}}>Previous experience</button>
                </div>
                {props.activeForm == 1 && <div className="form" id="personal-form">
                    <h2>Personal details</h2>

                    <form className="form-container" action="">
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
                        <label> What position do you apply for?
                            <input type="text" onChange={props.onChangeRole}/>
                        </label>
                    </form>
                    <button className="confirm-button" onClick={props.onSubmitPersonalForm}>Confirm</button>

                </div>}
                {props.activeForm == 2 && <div className="form" id="education-form">
                    <form className="center" action="">
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
                        <button className="confirm-button" onClick={props.onSubmitEducation}>Confirm</button>
                    </form>
                </div>}
                {props.activeForm == 3 && <div className="form" id="experience-form">
                    <h2>Previous experience</h2>

                    <form action="">
                        {props.experienceArray.map((item, index) => (
                            <div className="form-container" key={index}>
                                <label> Position
                                    <input name="position" type="text" value={item.position} onChange={(e) => props.onChangeExperience(e, index)} required/>
                                </label>
                                <label> Employer
                                    <input name="employer" type="text" value={item.employer} onChange={(e) => props.onChangeExperience(e, index)} required/>
                                </label>
                                <label> Start date
                                    <input name="startDate" type="text" value={item.startDate} onChange={(e) => props.onChangeExperience(e, index)} required/>
                                </label>
                                <label> End date
                                    <input name="endDate" type="text" value={item.endDate} onChange={(e) => props.onChangeExperience(e, index)} required/>
                                </label>
                                <label> Description
                                    <textarea name="description" value={item.description} onChange={(e) => props.onChangeExperience(e, index)} placeholder="Optional description"/>
                                    {/* <input name="description" type="description" value={item.description} onChange={(e) => props.onChangeExperience(e, index)} required/> */}
                                </label>
                                {props.experienceArray.length > 1 && 
                                    <button className="right" onClick={ (e) => {
                                        props.onRemoveExperience(e, index)
                                    }}>remove</button>
                                }
                                {props.experienceArray.length - 1 === index && props.experienceArray.length < 3 &&
                                    <button onClick={props.onAddExperience}>Add</button>
                                }
                            </div>
                        ))}
                    </form>
                    <button className="confirm-button" onClick={props.onSubmitExperience}>Confirm</button>

                </div>}
            </div>
        </div>

    )
}