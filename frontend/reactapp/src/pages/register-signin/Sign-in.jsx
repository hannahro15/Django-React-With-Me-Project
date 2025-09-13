import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Sign-in.css'
import React, { useState } from 'react';
import axios from 'axios';

function Signin() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/login/', {
        username,
        password,
    })
    .then(response => {
        console.log('Login Successful', response.data);
        localStorage.setItem('token', response.data.token);
    })
.   catch(error => {
        console.error('There was an error logging in!'), error);
    });
};


  return (
     <Form className="signin" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-label">Username: </Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
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
         <Button variant="primary" type="submit">
         Sign In
        </Button>
    </Form> 
  );
}

export default Signin;