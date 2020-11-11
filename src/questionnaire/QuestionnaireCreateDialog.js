import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input } from 'reactstrap'

const QuestionnaireCreateDialog = props => {

    let [showModal, setShowModal] = useState(false)
    let [questionnaire, setQuestionnaire] = useState({
        title: '',
        description: ''
    })

    const close = () => {
        setQuestionnaire({ title: '', description: '' })
        setShowModal(false)
    }

    const open = () => setShowModal(true)

    const change = event => {
        setQuestionnaire({ ...questionnaire, [event.target.name]: event.target.value })
    }

    const save = () => {
        props.create(questionnaire)
        close()
    }

    return (
        <div>
            <Button color="success" onClick={open} className="float-right">Add Questionnaire</Button>
            <Modal isOpen={showModal} toggle={close} size="lg" autoFocus={false}>
                <ModalHeader toggle={close}>Create Questionnaire</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label md={2} for="formTitle">
                                Title
                            </Label>
                            <Col md={10}>
                                <Input
                                type="text"
                                id="formTitle"
                                value={questionnaire.title}
                                autoFocus
                                name="title"
                                onChange={change}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2} for="formDescription">
                                Description
                            </Label>
                            <Col md={10}>
                                <Input
                                type="text"
                                id="formDescription"
                                value={questionnaire.description}
                                name="description"
                                onChange={change}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col className="clearfix" style={{ padding: '.2rem' }}>
                                <Button className="float-right" color="secondary"
                                    onClick={save}>Save</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default QuestionnaireCreateDialog
