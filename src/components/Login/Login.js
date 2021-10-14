import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import ProtiumLogo from '../../assets/images/protium-logo.png';
import './Login.css';

const Login = () => {
  return (
    <>
      <div className="login-form-container">
        <Form>
          <div className="image-container">
            <Image src={ProtiumLogo} fluid />
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
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
