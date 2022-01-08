import React, { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Container } from "./styles/Container.styled"
import { FormGroup, Label, Input } from "./styles/Forms.styled";
import { Button } from './styles/Button.styled';
import axios from 'axios';

function Forms() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const percentage = 69;

    const baseURL = 'http://127.0.0.1:8000/api/v1/predict/';
    const [state, setstate] = useState({
        gender: 'Male',
        married: 'Yes',
        dependents: '0',
        self_employed: 'Yes',
        education: 'Graduated',
        applicant_income: '',
        coapplicant_income: '',
        loan_amount: '',
        loan_amount_term: ''
    });

    const handleChange = (event) => {
        setstate({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const bodydata = {
            gender: state.gender,
            married: state.married,
            dependents: state.dependents,
            self_employed: state.self_employed,
            education: state.education,
            applicant_income: state.applicant_income,
            coapplicant_income: state.coapplicant_income,
            loan_amount: state.loan_amount,
            loan_amount_term: state.loan_amount_term
        };
        console.log("this is the user input: ", bodydata);
        axios.post(baseURL, { bodydata })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <>
            <Container>
                <FormGroup>
                    <form onSubmit={handleSubmit}>
                        <Row className="justify-content-md-center">
                            <Col sm={12} md={{ span: 4, offset: 2 }}>
                                <Label for="gender">Gender:</Label>
                                <select name="gender" value={state.gender} onChange={handleChange} id="gender">
                                    <option name="male" value="male">Male</option>
                                    <option name="female" value="female">Female</option>
                                </select>
                            </Col>
                            <Col sm={12} md={4} className="justify-content-md-center">
                                <Label for="married">Married:</Label>
                                <select name="married" value={state.married} onChange={handleChange} id="marital-status">
                                    <option name="yes" value="yes">Yes</option>
                                    <option name="no" value="no">No</option>
                                </select>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm={12} md={{ span: 4, offset: 2 }} className="justify-content-md-center">
                                <Label for="dependents">Dependents:</Label>
                                <select name="dependents" value={state.dependents} onChange={handleChange} id="dependents">
                                    <option name="0" value="0">0</option>
                                    <option name="1" value="1">1</option>
                                    <option name="2" value="2">2</option>
                                    <option name="3+" value="3+">3+</option>
                                </select>
                            </Col>
                            <Col sm={12} md={4} className="justify-content-md-center">
                                <Label for="self_employed">Self employed:</Label>
                                <select name="self_employed" value={state.self_employed} onChange={handleChange} id="self-employed">
                                    <option name="yes" value="yes">Yes</option>
                                    <option name="no" value="no">No</option>
                                </select>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm={12} md={{ span: 4, offset: 2 }} className="justify-content-md-center">
                                <Label for="education">Education:</Label>
                                <select name="education" value={state.education} onChange={handleChange} id="education">
                                    <option name="graduated" value="graduated">Graduated</option>
                                    <option name="not_graduated" value="not_graduated">Not Graduated</option>
                                </select>
                            </Col>
                            <Col sm={12} md={4} className="justify-content-md-center">
                                <Label>Applicant Income:</Label>
                                <Input
                                    type="text"
                                    name="applicant_income"
                                    value={state.applicant_income}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm={12} md={{ span: 4, offset: 2 }} className="justify-content-md-center">
                                <Label>Coapplicant Income:</Label>
                                <Input
                                    type="text"
                                    name="coapplicant_income"
                                    value={state.coapplicant_income}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col sm={12} md={4} className="justify-content-md-center">
                                <Label>Loan Amount:</Label>
                                <Input
                                    type="text"
                                    name="loan_amount"
                                    value={state.loan_amount}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm={12} md={{ span: 4, offset: 2 }} className="justify-content-md-center">
                                <Label>Loan Amount Term:</Label>
                                <Input
                                    type="text"
                                    name="loan_amount_term"
                                    value={state.loan_amount_term}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm={12} md={{ span: 4, offset: 2 }}>
                                <Button type="submit">APPLY</Button>
                            </Col>
                        </Row>
                    </form>
                </FormGroup>
            </Container>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>APPLICATION ACCEPTED</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Congratulations, your application for the loan has been accepted!

                    <CircularProgressbar value={percentage} />;

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Forms;