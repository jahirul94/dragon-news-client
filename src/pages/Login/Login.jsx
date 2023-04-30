import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginWithEmail } = useContext(AuthContext)
  const [ error , setError  ] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/category/0' 

  const handleLogin = event =>{
    setError('')
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  // firebase 
    loginWithEmail( email , password )
    .then(result =>{
       const signedUser = result.user;
       console.log(signedUser);
       navigate(from , { replace : true });
    })
    .catch(error =>{
      const errorMsg = error.message ;
      setError(errorMsg)
    })

    form.reset();

}


  return (
    <Container className="mx-auto w-25 mt-4">
        <h4 className="mb-4 fw-bold">Please Login</h4>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email"  required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <p>{error}</p>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
       <div className="mt-2">
           Don't Have An Account ? <Link to='/register' className="text-danger text-decoration-none"> Register </Link>
       </div>
    </Container>
  );
};

export default Login;
