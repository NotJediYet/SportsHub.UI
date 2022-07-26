import './Surveys.scss'
import React from "react";
import ClosedSurveysSection from "./SurveysComponents/ClosedSurveysSection";
import OpenedSurveysSection from "./SurveysComponents/OpenedSurveysSection";

export default function Surveys() {

    const surveys = [
        {
            id: 1,
            survey: "Sed the amet est, 11111111111 11111111111 111111111111111?",
            date:["2022/03/12", "2022/04/10"],
            percentage: [10, 40, 30],
            isOpen: true
        },
        {
            id: 2,
            survey: "Sed the amet est, 2222222222 2222222222222222 222222222222 22222222222?",
            date:["2022/03/13", "2022/04/10"],
            percentage: [20, 40, 30],
            isOpen: true
        },
        {
            id: 3,
            survey: "Sed the amet est, 33333333 33333333333333 333333333333 33333333 333333333?",
            date:["2022/03/14", "2022/04/10"],
            percentage: [30, 40, 30],
            isOpen: true
        },
        {
            id: 4,
            survey: "Sed the amet est, 444444444 44444444444 444444444 44444444 444444444 4444444 444 444444 44444 4444 4444 444 4444444 4444444444 444444 4444 444444 4444 4444444 44444?",
            date:["2022/03/15", "2022/04/10"],
            percentage: [40, 40, 30],
            isOpen: false
        },
        {
            id: 5,
            survey: "Sed the amet est, 55555555555 55555555555555 5555555555555555 5555555555?",
            date:["2022/03/16", "2022/04/10"],
            percentage: [50, 40, 30],
            isOpen: false
        },
        {
            id: 6,
            survey: "Sed the amet est, 66666666 6666666666 666666666 6666666666666 6666666666666?",
            date:["2022/03/17", "2022/04/10"],
            percentage: [60, 40, 30],
            isOpen: true
        },
        {
            id: 7,
            survey: "Sed the amet est, 7777777777    777777777      7777777777 7777777777  777777777?",
            date:["2022/03/18", "2022/04/10"],
            percentage: [70, 40, 30],
            isOpen: true
        },
        {
            id: 8,
            survey: "Sed the amet est, 888888888   8888888  888888 8888888888 8888888888 8888888888?",
            date:["2022/03/19", "2022/04/10"],
            percentage: [80, 40, 30],
            isOpen: true
        },
        {
            id: 9,
            survey: "Sed the amet est, 99999999999 999999999999 99999999999 99999999999 999999999999999?",
            date:["2022/03/20", "2022/04/10"],
            percentage: [90, 40, 30],
            isOpen: false
        },
        {
            id: 10,
            survey: "Sed the amet est, 101010101010101 010101010101010 1010101010110 101010 101010 1010101?",
            date:["2022/03/21", "2022/04/10"],
            percentage: [100, 40, 30],
            isOpen: false
        },
        {
            id: 11,
            survey: "Sed the amet est, 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11?",
            date:["2022/03/22", "2022/04/10"],
            percentage: [10, 40, 30],
            isOpen: false
        }
    ];


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

    const openedSurveysArray = surveys.filter(d => d.isOpen === true);
    const closedSurveysArray = surveys.filter(d => d.isOpen === false);

    const [isActiveOpened, setIsActiveOpened] = React.useState(true);
    const [isActiveSurvey, setIsActiveSurvey] = React.useState(true);
    const [SurveyId, setSurveyId] = React.useState(openedSurveysArray[0].id);
    const [ClosedSurveyId, setClosedSurveyId] = React.useState(closedSurveysArray[0].id);

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

    function SwitchOpenClosed(){
        setIsActiveOpened(!isActiveOpened)
    }

    const survey = surveys.find(element => element.id === SurveyId);
    const closedSurvey = surveys.find(element => element.id === ClosedSurveyId);

    return(
        <div className={"surveys-container"}>
            <div className={"surveys-OpenCloseText"}>
                <p onClick={SwitchOpenClosed} className={isActiveOpened ? "surveys-OpenCloseButtonActive" : "surveys-OpenCloseButton"}>
                    OPENED
                </p>
                <p onClick={SwitchOpenClosed} className={isActiveOpened ? "surveys-OpenCloseButton" : "surveys-OpenCloseButtonActive"}>
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