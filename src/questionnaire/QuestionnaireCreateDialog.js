import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input } from 'reactstrap'

const QuestionnaireCreateDialog = props => {

    let [showModal, setShowModal] = useState(false)
    let [questionnaire, setQuestionnaire] = useState({
        title: '',
        description: ''
    })

    // [event.target.name]: Computed property names, siehe https://mzl.la/1GIMi82
    // Spread Operator ... -> 
    const change = event =>
        setQuestionnaire({ ...questionnaire, [event.target.name]: event.target.value })

    const save = () => {
        props.create(questionnaire)
        close()
    }

    const close = () => {
        setQuestionnaire({ title: '', description: '' })
        setShowModal(false)
    }

    const open = () =>
        setShowModal(true)

    return (
        <div>
            <Button onClick={open} className="float-right" color='success'>Add Questionnaire</Button>
            <Modal isOpen={showModal} toggle={close} size="lg" autoFocus={false}>
                <ModalHeader toggle={close} >Show Questionnaire</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label md={2} for="formTitle">Title</Label>
                            <Col md={10}>
                                <Input onChange={change}
                                    type="text" id="formTitle"
                                    name='title'
                                    autoFocus
                                    value={questionnaire.title} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2} for="formDescription">description</Label>
                            <Col md={10}>
                                <Input onChange={change}
                                    type="text"
                                    id="formDescription"
                                    name='description'
                                    value={questionnaire.description} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col className="clearfix" style={{ padding: '.2rem' }}>
                                <Button className="float-right" color="secondary" onClick={save}>Save</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default QuestionnaireCreateDialog
