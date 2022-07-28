import './Surveys.scss'
import React from "react";
import ClosedSurveysSection from "./SurveysComponents/ClosedSurveysSection";
import OpenedSurveysSection from "./SurveysComponents/OpenedSurveysSection";
import {openedSurveysArray, closedSurveysArray} from "../../../services/surveys-services";


export default function Surveys() {

    const [isActiveOpened, setIsActiveOpened] = React.useState(true);
    const [isActiveSurvey, setIsActiveSurvey] = React.useState(true);
    const [SurveyId, setSurveyId] = React.useState(openedSurveysArray[0].id);
    const [ClosedSurveyId, setClosedSurveyId] = React.useState(closedSurveysArray[0].id);

    const survey = openedSurveysArray.find(element => element.id === SurveyId);
    const closedSurvey = closedSurveysArray.find(element => element.id === ClosedSurveyId);

    const ProgressBar = (completed) => {
        const fillerStyles = {
            height: '100%',
            width: `${completed}%`,
            background: "black",
            borderRadius: 'inherit',
            textAlign: 'right'
        }
        return (
                <div style={fillerStyles}>
                </div>
        );

    };

    const listOfItems = openedSurveysArray.map((d) =>
        <div key={d.id}
             onClick={()=>{setIsActiveSurvey(true); setSurveyId(d.id)}}
             className={(isActiveSurvey && (SurveyId=== d.id)) ? "survey-active" : "survey-not-active"}>
                <p className={(isActiveSurvey && (SurveyId=== d.id)) ? "show-active-text" : "hide-not-active-text"}>{d.survey}</p>
                <div className={(isActiveSurvey && (SurveyId=== d.id)) ? "survey-active-border" : ""}></div>
        </div>
    );

    const listOfClosedItems = closedSurveysArray.map((d) =>
        <div key={d.id}
             onClick={()=>{setIsActiveSurvey(true); setClosedSurveyId(d.id)}}
             className={(isActiveSurvey && (ClosedSurveyId=== d.id)) ? "survey-active" : "survey-not-active"}>
                <p className={(isActiveSurvey && (ClosedSurveyId=== d.id)) ? "show-active-text" : "hide-not-active-text"}>{d.survey}</p>
                <p>{`${d.date[1].slice(8)}/${d.date[1].slice(5,7)}/${new Date(d.date[1]).getFullYear().toString().slice(-2)}`}</p>
                <div className={(isActiveSurvey && (ClosedSurveyId=== d.id)) ? "survey-active-border" : ""}></div>
        </div>
    );

    return(
        <div className={"surveys-container"}>
            <div className={"surveys-open-close-text"}>
                <p onClick={() => {setIsActiveOpened(true)}} className={isActiveOpened ? "surveys-open-close-button-active" : "surveys-open-close-button"}>
                    OPENED
                </p>
                <p onClick={() => {setIsActiveOpened(false)}} className={isActiveOpened ? "surveys-open-close-button" : "surveys-open-close-button-active"}>
                    CLOSED
                </p>
            </div>

            <OpenedSurveysSection
                isActiveOpened={isActiveOpened}
                listOfItems={listOfItems}
                SurveyId={SurveyId}
                survey={survey}
                ProgressBar={ProgressBar}
                setSurveyId={setSurveyId}
                openedSurveysArray={openedSurveysArray}
            />

            <ClosedSurveysSection
                isActiveOpened={isActiveOpened}
                listOfClosedItems={listOfClosedItems}
                ClosedSurveyId={ClosedSurveyId}
                closedSurvey={closedSurvey}
                ProgressBar={ProgressBar}
            />

        </div>
    )
}