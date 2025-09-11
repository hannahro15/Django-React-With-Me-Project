import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div className='Home'>
            <h1>Welcome to Milton Keynes</h1>
            <p>Please view the attractions below by clicking the button to take you to the attractions page.</p>
            <Button variant="secondary">View Attractions</Button>
        </div>
    )
}

export default Home;