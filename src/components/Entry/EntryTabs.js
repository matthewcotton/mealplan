import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
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
                            <div onClick={() => setTabShow("left")} className="tabs" style={tabShow === "left" ? { backgroundColor: "#352C50", color: "#fff" } : { backgroundColor: "#f1f1f1", color: "#000" }} ><h5>New User</h5></div>
                            <div onClick={() => setTabShow("right")} className="tabs" style={tabShow === "right" ? { backgroundColor: "#352C50", color: "#fff" } : { backgroundColor: "#f1f1f1", color: "#000" }}><h5>Existing User</h5></div>
                        </div>
                        <div className="tabs-container-body">
                            <section style={tabShow === "left" ? { display: "block" } : { display: "none" }}>
                                <Form onSubmit={(e) => this.submitLogin(e)} className="login-container">
                                    <Form.Group controlId="formBasicEmail">
                                        <input style={{ width: "100%" }} placeholder="Create Username" className="input-styled p-2" type="username" name="username" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <input style={{ width: "100%" }} placeholder="Create Password" className="input-styled p-2" type="Password" name="password" />
                                    </Form.Group>
                                    <button className="button-main" type="submit">
                                        Sign up
                                    </button>
                                </Form>
                            </section>
                            <section style={tabShow === "right" ? { display: "block" } : { display: "none" }}>
                                <Form onSubmit={(e) => this.submitLogin(e)} className="login-container">
                                    <Form.Group controlId="formBasicEmail">
                                        <input style={{ width: "100%" }} placeholder="Username" className="input-styled p-2" type="username" name="username" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <input style={{ width: "100%" }} placeholder="Password" className="input-styled p-2" type="Password" name="password" />
                                    </Form.Group>
                                    <button className="button-main" type="submit">
                                        Login
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