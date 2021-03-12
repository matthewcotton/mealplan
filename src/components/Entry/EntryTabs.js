import React, { useState } from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import LogoGrey from '../../assets/logo-grey.png'

let EntryTabs = () => {
    let [tabShow, setTabShow] = useState("left")

    return (
        <>
            <Container className="pt-5">
                <section className="d-flex flex-column justify-content-center align-items-center">
                    <img alt="grey logo" src={LogoGrey} />
                    <section className="tabs-container">
                        <div className="tabs-container-header">
                            <div onClick={() => setTabShow("left")} className={tabShow === "left" ? "tab-active" : "tab-inactive"}><h5>Existing User</h5></div>
                            <div onClick={() => setTabShow("right")} className={tabShow === "right" ? "tab-active" : "tab-inactive"}><h5>New User</h5></div>
                        </div>
                        <div className="tabs-container-body">
                            <section style={tabShow === "left" ? { display: "block" } : { display: "none" }}>
                                <Form className="login-container">
                                    <Form.Group controlId="formBasicEmail">
                                        <input style={{ width: "100%" }} placeholder="Username" className="input-styled p-2" type="username" name="username" autoFocus/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <input style={{ width: "100%" }} placeholder="Password" className="input-styled p-2" type="Password" name="password" />
                                    </Form.Group>
                                    <button className="button-main" type="submit">
                                        Login
                                    </button>
                                </Form>
                            </section>
                            <section style={tabShow === "right" ? { display: "block" } : { display: "none" }}>
                                <Form className="login-container">
                                    <Form.Group controlId="formBasicEmail">
                                        <input style={{ width: "100%" }} placeholder="Create Username" className="input-styled p-2" type="username" name="username" />
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <input style={{width: "100%"}} placeholder="Create Password" className="input-styled p-2" type="Password" name="password" />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <input style={{width: "100%"}} placeholder="Re-type Password" className="input-styled p-2" type="Password" name="password-check" />
                                        </Form.Group>
                                    </Form.Row>
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