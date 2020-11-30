import React from "react"
import _ from 'lodash'
import { Button } from 'reactstrap'
import QuestionnaireShowDialog from "./QuestionnaireShowDialog"
import QuestionnaireUpdateDialog from './QuestionnaireUpdateDialog'

const textStyle = {
  verticalAlign: "middle",
};

const QuestionnaireTableElement = ({ questionnaire, update, remove }) => (
  <tr>
    <td colSpan="1" style={textStyle}>
      {questionnaire.id}
    </td>
    <td colSpan="3" style={textStyle}>
      {questionnaire.title}
    </td>
    <td colSpan="10" style={textStyle}>
      {questionnaire.description}
    </td>
    <td>
      <div className="btn-group float-right" role="group">
        <QuestionnaireShowDialog questionnaire={questionnaire} />
        <QuestionnaireUpdateDialog
          update={update}
          questionnaire={questionnaire}
        />
        <Button
          color="danger"
          onClick={_.partial(remove, questionnaire.id)}
          className="float-right"
        >
          Delete
        </Button>
      </div>
    </td>
  </tr>
);

export default QuestionnaireTableElement;
