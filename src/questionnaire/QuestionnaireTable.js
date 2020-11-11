import React from 'react';
import _ from 'lodash'
import { Table } from 'reactstrap';
import QuestionnaireTableElement from './QuestionnaireTableElement';

const QuestionnaireTable = ({ questionnaires, update, remove }) => 
    <Table hover>
        <tbody>
        { 
            _.map(questionnaires, questionnaire => 
                <QuestionnaireTableElement 
                    key={ questionnaire.id } 
                    questionnaire={ questionnaire }
                    update={ update }
                    remove={ remove } />
            ) 
        }
        </tbody>
    </Table>

export default QuestionnaireTable;