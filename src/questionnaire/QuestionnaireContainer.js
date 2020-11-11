import React, { useState } from 'react';
import _ from 'lodash';
import QuestionnaireTable from './QuestionnaireTable';
import QuestionnaireCreateDialog from "./QuestionnaireCreateDialog";

const ID = 'id';
const DEFAULT_ID = 0;

const QuestionnaireContainer = props => {

    // use this hook to set a new questionnaire array
    let [qs, setQuestionnaires] = useState(props.qs);

    // use this function to generate a new ID
    const id = qs => _.get(_.maxBy(qs, ID), ID, DEFAULT_ID) + 1;

    const create = (questionnaire) => {
        setQuestionnaires(_.concat(qs, { id: id(qs), ...questionnaire }));
    }

    return <div>
        <QuestionnaireCreateDialog create={create} />
        <h3>Questionnaires</h3>
        <QuestionnaireTable questionnaires={qs} />
    </div>
}

QuestionnaireContainer.defaultProps = {
    qs: [
        { 'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1' },
        { 'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2' },
        { 'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3' },
        { 'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4' },
        { 'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5' }
    ]
}

export default QuestionnaireContainer