import React from "react";
import { Table } from 'reactstrap';
import QuestionnaireTableElement from './QuestionnaireTableElement';

const renderTableElements = (questionnaires) => {
    return (
        questionnaires.map(questionnaire =>
            <QuestionnaireTableElement 
                key={questionnaire.id}
                questionnaire={questionnaire}
            />
        )
    )
}

const QuestionnaireTable = ({questionnaires}) => (
    <Table hover className="mt-4">
        <tbody>
            {renderTableElements(questionnaires)}
        </tbody>
    </Table>
)

export default QuestionnaireTable;