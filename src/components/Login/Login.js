import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import ProtiumLogo from '../../assets/images/protium-logo.png';
import { useHistory } from 'react-router';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('To be routed');
    history.push(`/customer`);
  };

  return (
    <>
      <div className="login-form-container">
        <Form onSubmit={formSubmitHandler}>
          <div className="image-container">
            <Image src={ProtiumLogo} fluid />
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button className="btn-container" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
