import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import React from 'react';
const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'mylogin');
      
      navigate('/employee');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
