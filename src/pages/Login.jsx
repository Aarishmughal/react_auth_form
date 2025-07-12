import React, { useState } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: 400 }}>
                <Card.Body>
                    <h1 className="m-0" style={{ fontSize: 56 }}>
                        Login
                    </h1>
                    <p className="small">
                        Please fill the information in the form below.
                    </p>
                    <Form onSubmit={handleOnSubmit}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email Address"
                            className="mb-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                        >
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>
                        <div className="mt-3 d-flex justify-content-center align-items-center gap-2">
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 btn-lg"
                            >
                                Login
                            </Button>
                            <Link to="/" className="w-100">
                                <Button
                                    variant="secondary"
                                    className="w-100 btn-lg"
                                >
                                    Back
                                </Button>
                            </Link>
                        </div>
                    </Form>
                    <p className="m-0 mt-2 small">
                        Not Already Registered?{" "}
                        <Link to={"/register"}>Register Now</Link>
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
