import {FaChevronDown} from 'react-icons/fa';
import React from "react";
import ReaderPollResults from "./ReaderPollResults";
import ReaderPoll from "./ReaderPoll";

export default function OpenedSurveysSection (props){
    const [isActiveShowResult, setIsActiveShowResult] = React.useState(true);
    const [SurveyId, setSurveyId] = React.useState(props.openedSurveysArray[0].id);
    const survey = props.openedSurveysArray.find(element => element.id === SurveyId);

    function SwitchResultButton(){
        setIsActiveShowResult(!isActiveShowResult);
    }

    const listOfItems = props.openedSurveysArray.map((d) =>
        <div key={d.id}
             onClick={()=>{setSurveyId(d.id)}}
             className={(SurveyId=== d.id) ? "survey-active" : "survey-not-active"}>
            <p className={(SurveyId=== d.id) ? "show-active-text" : "hide-not-active-text"}>{d.survey}</p>
            <div className={(SurveyId=== d.id) ? "survey-active-border" : ""}></div>
        </div>
    );

    return(
        <div className={"surveys-section-container-opened"}>
            <div className={"surveys-open-quests"}>
                <div className={"surveys-open-quests-head"}>
                    <p>questions</p>
                    <div>
                        <p>
                            Sort by: Most popular
                            <FaChevronDown/>
                        </p>
                    </div>
                </div>
                <div className={"surveys-container-opened"}>
                    {listOfItems}
                </div>
            </div>
            <div style={{display: SurveyId === 0 ? "none" : "flex" }} className={"user-quiz"}>
                    <span>
                        <p>
                           READER POLL
                        </p>
                        <p>
                            {survey===undefined ? "" : `${new Date(survey.date[0]).toLocaleString('en-US', {month: 'short',day:"numeric"})} - ${new Date(survey.date[1]).toLocaleString('en-US', {month: 'short',day:"numeric"})}`}
                        </p>
                    </span>
                <div className={"closed-surveys-poll-and-pool-container"}>
                    {isActiveShowResult
                        ? <ReaderPoll survey={survey} isActiveShowResult={isActiveShowResult}/>
                        : <ReaderPollResults surveys={survey} SurveyId={SurveyId} ProgressBar={props.ProgressBar} class={"surveys-reader-poll-results"}/>
                    }
                    <span className={"surveys-poll-navigation-buttons"}>
                            <button style={{display: isActiveShowResult ? "flex" : "none" }} onClick={() => { props.openedSurveysArray[(props.openedSurveysArray.indexOf(props.openedSurveysArray.find(d => d.id === SurveyId))+1)%props.openedSurveysArray.length] ? setSurveyId(props.openedSurveysArray[(props.openedSurveysArray.indexOf(props.openedSurveysArray.find(d => d.id === SurveyId))+1)%props.openedSurveysArray.length].id) : setSurveyId(props.openedSurveysArray[0].id)}} className={"next-survey-button"}>Next</button>
                            <button onClick={SwitchResultButton} className={isActiveShowResult ?  "result-switch-button" : "results-button-active"}>{isActiveShowResult ? "See the results" : "Back to survey"}</button>
                        </span>
                </div>
            </div>
        </div>
    )
}