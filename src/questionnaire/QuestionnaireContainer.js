import React from "react";
import QuestionnaireTable from './QuestionnaireTable';

class QuestionnaireContainer extends React.Component {

  render() {
    return (
        <div>
            <h3>Questionnaires</h3>
            <QuestionnaireTable questionnaires={this.props.questionnaires} />
        </div>
    )
  }
}

export default QuestionnaireContainer;
