import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./registerCSS.css"
import { useContext } from 'react';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hook/useForm';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <Form className='registerForm' onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={onChange}
                    values={values[RegisterFormKeys.Email]}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={onChange}
                    values={values[RegisterFormKeys.Password]}

                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="confirm-password"
                    onChange={onChange}
                    values={values[RegisterFormKeys.ConfirmPassword]}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Register;