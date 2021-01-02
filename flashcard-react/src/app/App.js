import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import Header from "./Header";
import QuestionnaireContainer from "../questionnaire/QuestionnaireContainer";
import Footer from "./Footer";
import Loader from "../misc/Loader";
import Message from "../misc/Message";

const defaultServerUrl = "http://localhost:8080/flashcard";

const App = () => {
    // version 1:
    // external configuration using script '.env' - rebuild/restart is necessary!
    //----
    // const isError = false
    // const SERVER_URL = process.env.REACT_APP_SERVER_URL ? process.env.REACT_APP_SERVER_URL : defaultServerUrl;
    // const serverUrl = SERVER_URL + '/questionnaires'

    // version 2:
    // external configuration using script 'env-config.js' - reload is necessary!
    //----
    // const isError = false
    // const SERVER_URL = window._env_.SERVER_URL ? window._env_.SERVER_URL : defaultServerUrl
    // const serverUrl = SERVER_URL + '/questionnaires'

    // version 3:
    // external configuration using file 'application.json' - reload is necessary!
    //----
    const [isError, setIsError] = useState(false);
    const [serverUrl, setServerUrl] = useState(null);
    
    useEffect(() => {
        fetch("application.json")
            .then((response) => response.json())
            .then((js) => {
                const SERVER_URL = js.url ? js.url : defaultServerUrl;
                console.log("serverUrl is %s", SERVER_URL);
                setServerUrl(SERVER_URL + "/questionnaires");
            })
            .catch((error) => {
                console.error("App Error: " + error);
                setIsError(true);
            });
    }, []);

    let comp;
    if (isError) {
      comp = <Message message="Network error" />;
    } else if (serverUrl === null) {
      comp = <Loader />;
    } else {
      comp = <QuestionnaireContainer serverUrl={serverUrl} />;
    }

    return (
        <Container>
            <Header title="Flashcard Client with React" subtitle="Version 2" />
            {comp}
            <Footer message="The FHNW Team" />
        </Container>
    );
};

export default App;
