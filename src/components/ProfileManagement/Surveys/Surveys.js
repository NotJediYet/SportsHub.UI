import './Surveys.scss'
import React from "react";
import ClosedSurveysSection from "./SurveysComponents/ClosedSurveysSection";
import OpenedSurveysSection from "./SurveysComponents/OpenedSurveysSection";
import {GetSurveys} from "../../../services/SurveysServices/SurveysService";

export default function Surveys() {

    const [isOpenSurveys, setIsOpenSurveys] = React.useState(true);
    const [surveys, setSurveys] = React.useState(GetSurveys(isOpenSurveys));

    if (surveys.length === 0){
        setSurveys([{
            id: 0,
            survey: "No surveys left",
            date:["", ""],
            percentage: [],
            isOpen: true
        }]);
    }

    function Surveys(surveysFilterModel){
        setIsOpenSurveys(surveysFilterModel);
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
                <p onClick={() => {if(isOpenSurveys===false)Surveys(true)}} className={isOpenSurveys ? "surveys-open-close-button-active" : "surveys-open-close-button"}>
                    OPENED
                </p>
                <p onClick={() => {if (isOpenSurveys===true)Surveys(false)}} className={isOpenSurveys ? "surveys-open-close-button" : "surveys-open-close-button-active"}>
                    CLOSED
                </p>
            </div>
            <div className={"surveys-section-container-opened"}>
                {isOpenSurveys
                    ? <OpenedSurveysSection isOpenSurveys={isOpenSurveys} ProgressBar={ProgressBar} openedSurveysArray={surveys}/>
                    : <ClosedSurveysSection isOpenSurveys={isOpenSurveys} ProgressBar={ProgressBar} closedSurveysArray={surveys}/>
                }
            </div>
        </div>
    )
}