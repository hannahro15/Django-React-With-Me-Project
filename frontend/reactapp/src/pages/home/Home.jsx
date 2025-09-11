import Button from 'react-bootstrap/Button';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <h1 id="home-title"> Welcome to Milton Keynes</h1>
                <p id="home-paragraph">Please view the attractions below by clicking the button to take you to the attractions page.</p>
                <Button variant="secondary" id="home-page-button">View Attractions</Button>
            </div>
        </div >
    )
}

export default Home;