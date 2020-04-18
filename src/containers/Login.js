import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Form, Button, FormGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import "./Login.css";

export default function Login() {
    const history = useHistory();
    const { userHasAuthenticated } = useAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function responseGoogleSuccess(response) {
        console.log(response);
        userHasAuthenticated(true);
        history.push('/')
    }

    function responseGoogleFail(response) {
        console.log(response);
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email" bsSize="large">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <FormGroup controlId="password" bsSize="large">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <button block disabled={!validateForm()} type="submit">
                    Login
                </button>
                <GoogleLogin
                    clientId="1022136605161-85hl38q8a3t8d6vtn40au39tvaaq7chq.apps.googleusercontent.com"
                    buttonText="Login"
                    render={renderProps => (
                        <button block onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</button>
                    )}
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFail}
                    cookiePolicy={'single_host_origin'}
                />
            </Form>
        </div>
    );
}