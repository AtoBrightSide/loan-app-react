import React, { useState } from 'react'
import { Col, Dropdown, DropdownButton, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Container } from "./styles/Container.styled"
import { FormGroup, Label, Input } from "./styles/Forms.styled";
import { Button } from './styles/Button.styled';

export default function Forms() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const percentage = 69;
    return (
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col>
                    <FormGroup>
                        <Label htmlFor="label">First Name</Label>
                        <Input id="label" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <Input />
                    </FormGroup>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
                <Col sm={2}></Col>
                <Col>
                    <FormGroup>
                        <Label>Marital Status</Label>
                        <DropdownButton
                            variant="outline-secondary"
                            title="Married"
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="#">Married</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Single</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Looking for some action ;)</Dropdown.Item>
                        </DropdownButton>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Gender</Label>
                        <DropdownButton
                            variant="outline-secondary"
                            title="Male"
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="#">Male</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Female</Dropdown.Item>
                        </DropdownButton>
                    </FormGroup>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
                <Col sm={2}></Col>
                <Col>
                    <FormGroup>
                        <Label>Education</Label>
                        <Input />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Income</Label>
                        <Input />
                    </FormGroup>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
                <Col sm={2}></Col>

                <Col>
                    <FormGroup>
                        <Label>Loan Amount</Label>
                        <Input />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Loan Amount Term</Label>
                        <Input />
                    </FormGroup>
                </Col>
                <Col sm={2}></Col>

            </Row>
            <Row>
                <Button variant="primary" onClick={handleShow}>
                    APPLY
                </Button>
            </Row>
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

                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

