
import '../styles/paper.css';

export default function Paper() {
    let name = "Ionut";
    return (
        <div className="paper-container">
            <div className="a4-paper">
                <div className='sidebar-container'>
                    <h2>sidebar</h2>
                </div>
                <div className='main-description'>
                    <h2>hello world</h2>
                    <h2>my name is {''}
                        {name}
                    </h2>
                </div>
                
            </div>
        </div>
    )
}