import React, { useState } from 'react'
import toastr from 'toastr'
import { Container, Form, Col } from 'react-bootstrap'
import LogoGrey from '../../assets/images/logo-grey.png'

let EntryTabs = ({ apiClient, logInFunc }) => {
    let [tabShow, setTabShow] = useState("left")
    let [signUpFormError, setSignUpFormError] = useState("");
    let [logInFormError, setLogInFormError] = useState("")
    
    let handleSignUp = (e) => {
        e.preventDefault();
        // reference for username & both passwords
        let username = e.target.username.value
        let password = e.target.password.value
        let passwordCheck = e.target.passwordCheck.value
        // check if both passwords are correct
        if (password !== passwordCheck) {
            setSignUpFormError("Error! Your passwords don't match.")
        } else {
            // if both passwords are correct, send data to API and process response status
            apiClient.signUp(username, password)
                .then(response => {
                    toastr.success(response.data.message)
                    setTabShow("left")
                    e.target.username.value = ""
                    e.target.password.value = ""
                    e.target.passwordCheck.value = ""
                })
                .catch(err => {
                    alert(err) // needs looking at handling errors better
                    console.error(err)
                })
        }
    }

    let handleLogIn = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        apiClient.logIn(username, password)
            .then(response => {
                logInFunc(response.data.token)
            })
            .catch(err => {
                alert("Sorry, unable to login.")
                console.log(err)
            })
    }

    return (
        <>
            <Container className="pt-5">
                <section className="d-flex flex-column justify-content-center align-items-center">
                    <img alt="grey logo" src={LogoGrey} />
                    <section className="tabs-container">
                        <div className="tabs-container-header">
                            <div onClick={() => setTabShow("left")} className={tabShow === "left" ? "tab-active" : "tab-inactive"}><h5>Log In</h5></div>
                            <div onClick={() => setTabShow("right")} className={tabShow === "right" ? "tab-active" : "tab-inactive"}><h5>Sign Up</h5></div>
                        </div>
                        <div className="tabs-container-body">
                            <section style={tabShow === "left" ? { display: "block" } : { display: "none" }}>
                                <Form onSubmit={(e) => handleLogIn(e)}>
                                    <Form.Group controlId="formBasicEmail">
                                        <input required style={{ width: "100%" }} placeholder="Username" className="input-styled p-2" type="username" name="username" autoFocus />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <input required style={{ width: "100%" }} placeholder="Password" className="input-styled p-2" type="Password" name="password" />
                                    </Form.Group>
                                    <small className="error-message">{logInFormError}</small>
                                    <button className="button-main entry-form-button" type="submit">
                                        Login
                                    </button>
                                </Form>
                            </section>
                            <section style={tabShow === "right" ? { display: "block" } : { display: "none" }}>
                                <Form onSubmit={(e) => handleSignUp(e)}>
                                    <Form.Group controlId="formBasicEmail">
                                        <input required style={{ width: "100%" }} placeholder="Create Username" className="input-styled p-2" type="username" name="username" />
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <input required style={{ width: "100%" }} placeholder="Create Password" className="input-styled p-2" type="Password" name="password" />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <input style={{ width: "100%" }} placeholder="Re-type Password" className="input-styled p-2" type="Password" name="passwordCheck" />
                                        </Form.Group>
                                    </Form.Row>
                                    <small className="error-message">{signUpFormError}</small>
                                    <button className="button-main entry-form-button" type="submit">
                                        Sign up
                                    </button>
                                </Form>
                            </section>
                        </div>
                    </section>
                </section>
            </Container>
        </>
    )
}

export default EntryTabs