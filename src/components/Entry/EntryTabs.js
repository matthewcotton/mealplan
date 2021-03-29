import React, { useState } from 'react'
import 'toastr/build/toastr.min.css';
import toastr from 'toastr'
import { Container, Form, Col } from 'react-bootstrap'
import LogoGrey from '../../assets/images/logo-grey.png'
import Loader from '../../assets/images/loading-gif.gif'
import InfoModal from '../Entry/InfoModal'

let EntryTabs = ({ apiClient, logInFunc }) => {
    let [tabShow, setTabShow] = useState("left")
    let [formError, setFormError] = useState({
        logIn: "",
        signUp: ""
    });
    let [buttonDisabled, setButtonDisabled] = useState({ login: false, signup: false });
    let [modalState, setModalState] = useState(false);

    let handleSignUp = (e) => {
        e.preventDefault();
        // reference for username & both passwords
        let username = e.target.username.value
        let password = e.target.password.value
        let passwordCheck = e.target.passwordCheck.value
        // check if both passwords are correct
        if (password !== passwordCheck) {
            setFormError({ signUp: "Your passwords don't match." })
        } else {
            setButtonDisabled({ signup: true })
            // if both passwords are correct, send data to API and process response status
            apiClient.signUp(username, password)
                .then(response => {
                    toastr.success(response.data.message)
                    setTabShow("left")
                    setFormError({ signUp: "" })
                    e.target.username.value = ""
                    e.target.password.value = ""
                    e.target.passwordCheck.value = ""
                })
                .catch(err => {
                    if (err.response.status === 409) {
                        setFormError({ signUp: "Username already exists. Please use a different username." })
                    } else {
                        setFormError({ signUp: "Error creating account. Please try again later." })
                    }
                })
                .finally(() => setButtonDisabled({ signup: false }))
        }
    }

    let handleLogIn = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        setButtonDisabled({ login: true })
        apiClient.logIn(username, password)
            .then(response => {
                setButtonDisabled({ login: false })
                const newUser = { username: response.data.username }
                logInFunc(newUser, response.data.token)
            })
            .catch(err => {
                if (err.response.status === 401 || err.response.status === 403) {
                    setFormError({ logIn: "Incorrect username or password." })
                } else {
                    setFormError({logIn: "Unable to log in at this moment. Please try again later."})
                }
            })
    }

    return (
        <Container>
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
                                <Form.Group>
                                    <input required style={{ width: "100%" }} placeholder="Username" className="input-styled p-2" type="username" name="username" autoFocus />
                                </Form.Group>
                                <Form.Group>
                                    <input required style={{ width: "100%" }} placeholder="Password" className="input-styled p-2" type="Password" name="password" />
                                </Form.Group>
                                <small className="error-message">{formError.logIn}</small>
                                <button className="button-main entry-form-button" type="submit" disabled={buttonDisabled.login}>
                                    Login
                                    <img style={buttonDisabled.login ? { display: "inline-block" } : { display: "none" }} height="30px" alt="...loading" src={Loader} />
                                </button>
                            </Form>
                        </section>
                        <section style={tabShow === "right" ? { display: "block" } : { display: "none" }}>
                            <Form onSubmit={(e) => handleSignUp(e)}>
                                <Form.Group>
                                    <input required style={{ width: "100%" }} placeholder="Create Username" className="input-styled p-2" type="username" name="username" autoFocus />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <input required style={{ width: "100%" }} placeholder="Create Password" className="input-styled p-2" type="Password" name="password" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <input as={Col} style={{ width: "100%" }} placeholder="Re-type Password" className="input-styled p-2" type="Password" name="passwordCheck" />
                                    </Form.Group>
                                </Form.Row>
                                <small className="error-message">{formError.signUp}</small>
                                <button className="button-main entry-form-button" type="submit" disabled={buttonDisabled.signup}>
                                    Sign up
                                    <img style={buttonDisabled.signup ? { display: "inline-block" } : { display: "none" }} height="30px" alt="...loading" src={Loader} />
                                </button>
                            </Form>
                        </section>
                    </div>
                </section>
            </section>
            <div className="pt-3 d-flex justify-content-center align-items-center">
                <svg onClick={() => setModalState(true)} id="entry-question-mark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" className="svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>
            </div>
            <InfoModal show={modalState} close={() => setModalState(false)} />
        </Container>
    )
}

export default EntryTabs