import './Attractions.css'

function Attractions() {
    return (
        <div className="attractions">
            <h1>Milton Keynes Attractions</h1>
            <p id='attractions-paragraph'>Here are a list of a few of the best attractions around the Milton Keynes area below.</p>
            <ul className="attractions-list">
                <li className="attractions-item">Bletchley Park</li>
                <li className="attractions-item">Milton Keynes Museum</li>
                <li className="attractions-item">Woburn Safari Park</li>
                <li className='attractions-item'>Whipsnade Zoo</li>
                <li className='attractions-item'>Snozone</li>
            </ul>
        </div>

    )
}

export default Attractions;