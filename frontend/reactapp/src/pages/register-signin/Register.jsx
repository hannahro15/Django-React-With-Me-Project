import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css'
import React, { useState } from 'react';
import axios from 'axios';

function Register() {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [dateofbirth, setDateOfBirth] = useState('');
const [country, setCountry] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/register/', {
    username,
    email,
    password,
    dateofbirth, 
    country,
    })
    .then(response => {
    console.log('Registration Successful', response.data);
    })
    .catch(error => {
    console.error('There was an error registering!', error);
    });
};
    return (
        <Form className="register" onSubmit={handleSubmit}>
        <h1>Register below</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form-label">Username: </Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter your username" 
        value={username} 
        onChange={(e)=> setUsername(e.target.value)}
        required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form-label">Email address: </Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="form-label">Password: </Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange= {(e) => setPassword(e.target.value)}
        required/>
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form-label">Date of Birth: </Form.Label>
        <Form.Control 
        type="date" 
        placeholder="Enter your date of birth" 
        value={dateofbirth} 
        onChange={(e) => setDateOfBirth(e.target.value)} 
        required/>
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form-label">Country: </Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter the country where you are based" 
        value={country} 
        onChange={(e) => setCountry(e.target.value)} 
        required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form> 
  );
}

export default Register;