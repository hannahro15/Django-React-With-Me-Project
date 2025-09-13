import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css'

function Register() {

    return (
    <Form className="register">
      <Form.Group className="mb-10" controlId="formBasicEmail">
        <Form.Label className="form-label">Username: </Form.Label>
        <Form.Control type="name" placeholder="Enter your username" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form-label">Email address: </Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="form-label">Password: </Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form-label">Date of Birth: </Form.Label>
        <Form.Control type="name" placeholder="Enter your date of birth" required/>
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form-label">Country: </Form.Label>
        <Form.Control type="name" placeholder="Enter the country where you are based" required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form> 
  );
}

export default Register;