import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Sign-in.css'

function Signin() {
  return (
     <Form className="signin">
        <h1>Sign In</h1>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-label">Email address: </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password: </Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
         <Button variant="primary" type="submit">
         Sign In
        </Button>
    </Form> 
  );
}

export default Signin;