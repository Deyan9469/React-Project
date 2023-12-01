import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./loginCSS.css"

import { useContext } from "react";
import AuthContext from '../../contexts/authContext';
import useForm from '../../hook/useForm';


const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });


    return (
        <Form className='loginForm' onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    name={LoginFormKyes.Email}
                    onChange={onChange}
                    value={values[LoginFormKyes.Email]}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    id="login-password"
                    name={LoginFormKyes.Password}
                    onChange={onChange}
                    value={values[LoginFormKyes.Password]}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Login;