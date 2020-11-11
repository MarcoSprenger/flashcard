import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Col, Input } from "reactstrap";

const QuestionnaireUpdateDialog = ({ questionnaire: oldQuestionnaire, update }) => {
  let [questionnaire, setQuestionnaire] = useState(oldQuestionnaire);
  let [showModal, setShowModal] = useState(false);

  const open = () => setShowModal(true);

  const close = () => {
    setQuestionnaire({ title: "", description: "" });
    setShowModal(false);
  };

  const change = (event) => {
    setQuestionnaire({ ...questionnaire, [event.target.name]: event.target.value });
  };

  const save = () => {
    setShowModal(false);
    update({ ...questionnaire, id: oldQuestionnaire.id });
  };

  return (
    <div>
      <Button color="primary" onClick={open} className="float-right">
        Edit
      </Button>
      <Modal isOpen={showModal} toggle={close} size="lg" autoFocus={false}>
        <ModalHeader toggle={close}>Edit Questionnaire</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label md={2} for="formTitle">
                Title
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  name="title"
                  value={questionnaire.title}
                  id="formTitle"
                  autoFocus
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
                  name="description"
                  value={questionnaire.description}
                  id="formDescription"
                  onChange={change}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col className="clearfix" style={{ padding: ".2rem" }}>
                <Button
                  className="float-right"
                  color="secondary"
                  onClick={save}
                >
                  Save
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default QuestionnaireUpdateDialog;
