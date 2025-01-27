import Person from './Person.jsx'
import Education from './Education.jsx'

export default function CvMain() {
    return (
        <div className='editable-container'>
            <Person />
            <Education />
        </div>
    )
}