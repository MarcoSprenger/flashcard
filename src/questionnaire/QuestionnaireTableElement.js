import React from "react"
import QuestionnaireShowDialog from "./QuestionnaireShowDialog"

const textStyle = {
  verticalAlign: "middle",
};

const QuestionnaireTableElement = ({ questionnaire }) => (
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
      </div>
    </td>
  </tr>
);

export default QuestionnaireTableElement;
