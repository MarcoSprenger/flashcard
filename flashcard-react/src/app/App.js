import React from 'react'
import { Container } from 'reactstrap'

import Header from './Header'
import QuestionnaireContainer from '../questionnaire/QuestionnaireContainer'
import Footer from './Footer'

const serverUrl = "http://localhost:8080/flashcard-rest/questionnaires"

const App = () => 
    <Container>
        <Header title='Flashcard Client with React' subtitle='Version 1' />
        <QuestionnaireContainer serverUrl={ serverUrl }/>
        <Footer message='The FHNW Team' />
    </Container>

export default App
