import './Surveys.scss'
import React from "react";
import ClosedSurveysSection from "./SurveysComponents/ClosedSurveysSection";
import OpenedSurveysSection from "./SurveysComponents/OpenedSurveysSection";
import {GetSurveys} from "../../../services/SurveysServices/SurveysService";

export default function Surveys() {

    const [isActiveOpened, setIsActiveOpened] = React.useState(true);
    const [surveys, setSurveys] = React.useState(GetSurveys(isActiveOpened));

    function Surveys(surveysFilterModel){
        setIsActiveOpened(surveysFilterModel);
        setSurveys(GetSurveys(surveysFilterModel));
    }

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

    return(
        <div className={"surveys-container"}>
            <div className={"surveys-open-close-text"}>
                <p onClick={() => {if(isActiveOpened===false)Surveys(true)}} className={isActiveOpened ? "surveys-open-close-button-active" : "surveys-open-close-button"}>
                    OPENED
                </p>
                <p onClick={() => {if (isActiveOpened===true)Surveys(false)}} className={isActiveOpened ? "surveys-open-close-button" : "surveys-open-close-button-active"}>
                    CLOSED
                </p>
            </div>
            {isActiveOpened
                ? <OpenedSurveysSection isActiveOpened={isActiveOpened} ProgressBar={ProgressBar} openedSurveysArray={surveys}/>
                : <ClosedSurveysSection isActiveOpened={isActiveOpened} ProgressBar={ProgressBar} closedSurveysArray={surveys}/>
            }
        </div>
    )
}