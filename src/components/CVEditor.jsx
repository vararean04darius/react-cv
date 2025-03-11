/* eslint-disable react/prop-types */

export default function CVEditor(props) {
    return(
        <div className='personal-form'>
            <form className="form-container" action="">
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
                <button onClick={props.onSubmitPersonalForm}>Confirm info</button>
            </form>
        </div>
    )
}