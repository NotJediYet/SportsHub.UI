import './Surveys.css'
import React from "react";
import {FaChevronDown} from 'react-icons/fa';

export default function Surveys() {

    const surveys = [
        {
            id: 1,
            survey: "Sed the amet est, 11111111111 11111111111 111111111111111?",
            date:["2022/03/12", "2022/04/10"],
            percentage: [30, 40, 30],
            isOpen: true
        },
        {
            id: 2,
            survey: "Sed the amet est, 2222222222 2222222222222222 222222222222 22222222222?",
            date:["2022/03/13", "2022/04/10"],
            percentage: [30, 40, 30],
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
            percentage: [30, 40, 30],
            isOpen: false
        },
        {
            id: 5,
            survey: "Sed the amet est, 55555555555 55555555555555 5555555555555555 5555555555?",
            date:["2022/03/16", "2022/04/10"],
            percentage: [30, 40, 30],
            isOpen: false
        },
        {
            id: 6,
            survey: "Sed the amet est, 66666666 6666666666 666666666 6666666666666 6666666666666?",
            date:["2022/03/17", "2022/04/10"],
            percentage: [30, 40, 30],
            isOpen: true
        },
        {
            id: 7,
            survey: "Sed the amet est, 7777777777    777777777      7777777777 7777777777  777777777?",
            date:["2022/03/18", "2022/04/10"],
            percentage: [30, 40, 30],
            isOpen: true
        },
        {
            id: 8,
            survey: "Sed the amet est, 888888888   8888888  888888 8888888888 8888888888 8888888888?",
            date:["2022/03/19", "2022/04/10"],
            percentage: [30, 40, 30],
            isOpen: true
        },
        {
            id: 9,
            survey: "Sed the amet est, 99999999999 999999999999 99999999999 99999999999 999999999999999?",
            date:["2022/03/20", "2022/04/10"],
            percentage: [30, 40, 30],
            isOpen: false
        },
        {
            id: 10,
            survey: "Sed the amet est, 101010101010101 010101010101010 1010101010110 101010 101010 1010101?",
            date:["2022/03/21", "2022/04/10"],
            percentage: [30, 40, 30],
            isOpen: false
        },
        {
            id: 11,
            survey: "Sed the amet est, 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11?",
            date:["2022/03/22", "2022/04/10"],
            percentage: [30, 40, 30],
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

    const openedSurveysArr = surveys.filter(d => d.isOpen === true);
    const closedSurveysArr = surveys.filter(d => d.isOpen === false);

    const [isActiveShowRes, setIsActiveShowRes] = React.useState(true);
    const [isActiveOpened, setIsActiveOpened] = React.useState(true);
    const [isActiveSurvey, setIsActiveSurvey] = React.useState(true);
    const [SurveyId, setSurveyId] = React.useState(openedSurveysArr[0].id);
    const [ClosedSurveyId, setClosedSurveyId] = React.useState(closedSurveysArr[0].id);

    const listOfItems = openedSurveysArr.map((d) => <div key={d.id} onClick={()=>{setIsActiveSurvey(true); setSurveyId(d.id)}} className={(isActiveSurvey && (SurveyId=== d.id)) ? "survey-active" : "survey-not-active"}><p className={(isActiveSurvey && (SurveyId=== d.id)) ? "show-active-text" : "hide-not-active-text"}>{d.survey}</p><div className={(isActiveSurvey && (SurveyId=== d.id)) ? "survey-active-border" : ""}></div></div>);
    const listOfClosedItems = closedSurveysArr.map((d) => <div key={d.id} onClick={()=>{setIsActiveSurvey(true); setClosedSurveyId(d.id)}} className={(isActiveSurvey && (ClosedSurveyId=== d.id)) ? "survey-active" : "survey-not-active"}><p className={(isActiveSurvey && (ClosedSurveyId=== d.id)) ? "show-active-text" : "hide-not-active-text"}>{d.survey}</p><p>{`${d.date[1].slice(8)}/${d.date[1].slice(5,7)}/${new Date(d.date[1]).getFullYear().toString().slice(-2)}`}</p><div className={(isActiveSurvey && (ClosedSurveyId=== d.id)) ? "survey-active-border" : ""}></div></div>);

    function SwitchResult(){
        setIsActiveShowRes(!isActiveShowRes);
    }

    function SwitchOpenClosed(){
        setIsActiveOpened(!isActiveOpened)
    }

    const survey = surveys.find(element => element.id === SurveyId);
    const closedSurvey = surveys.find(element => element.id === ClosedSurveyId);

    return(
        <div className={"surveysOption-container"}>
            <div className={"surveysOption-OpenCloseText"}>
                <p onClick={SwitchOpenClosed} className={isActiveOpened ? "surveysOption-OpenCloseButtonActive" : "surveysOption-OpenCloseButton"}>
                    OPENED
                </p>
                <p onClick={SwitchOpenClosed} className={isActiveOpened ? "surveysOption-OpenCloseButton" : "surveysOption-OpenCloseButtonActive"}>
                    CLOSED
                </p>
            </div>

            <div style={{display: isActiveOpened ? "flex" : "none" }} className={"surveysSectionContainerOpened"}>
                <div className={"surveysOption-OpenQuests"}>
                    <div className={"surveysOption-OpenQuests-head"}>
                        <p>questions</p>
                        <div>
                            <p>
                                Sort by: Most popular
                                <FaChevronDown/>
                            </p>
                        </div>
                    </div>
                    <div className={"surveysContainerOpened"}>
                        {listOfItems}
                    </div>
                </div>
                <div style={{display: SurveyId === 0 ? "none" : "flex" }} className={"userQuiz"}>
                    <span>
                        <p>
                            {isActiveShowRes ? "READER POLL" :  "READER POOL"}
                        </p>
                        <p>
                            {survey===undefined ? "" : `${new Date(survey.date[0]).toLocaleString('en-US', {month: 'short',day:"numeric"})} - ${new Date(survey.date[1]).toLocaleString('en-US', {month: 'short',day:"numeric"})}`}
                        </p>
                    </span>
                    <div   className={"surveysPollandPoolContainer"}>
                        <p>
                            {survey===undefined ? "" : survey.survey}
                        </p>
                        <div style={{display: isActiveShowRes ? "flex" : "none"}} className={"surveysReaderPoll"}>
                            <span>
                                <input id={"PollCoice1"} name={"UserPoll"} value={"Yes"} type="radio"/>
                                <label htmlFor="PollCoice1">Yes</label>
                            </span>

                            <span>
                                <input id={"PollCoice2"} name={"UserPoll"} value={"No"} type="radio"/>
                                <label htmlFor="PollCoice2">No</label>
                            </span>

                            <span>
                                <input id={"PollCoice3"} name={"UserPoll"} value={"Maybe"} type="radio"/>
                                <label htmlFor="PollCoice3">Maybe</label>
                            </span>
                        </div>
                        <div style={{display: isActiveShowRes ? "none" : "flex"}} className={"surveysReaderPool"}>
                            <div>
                                <span>
                                    <p>
                                        Yes
                                    </p>
                                    <p>
                                        {`${survey.percentage[0]}%`}
                                    </p>
                                </span>
                                <div className={"yesResultsProgressBar"}>
                                    {ProgressBar(survey.percentage[0])}
                                </div>
                            </div>
                            <div>
                                <span>
                                    <p>
                                        No
                                    </p>
                                    <p>
                                        {`${survey.percentage[1]}%`}
                                    </p>
                                </span>
                                <div className={"noResultsProgressBar"}>{ProgressBar(survey.percentage[1])}</div>
                            </div>
                            <div>
                                <span>
                                    <p>
                                        Maybe
                                    </p>
                                    <p>
                                        {`${survey.percentage[2]}%`}
                                    </p>
                                </span>
                                <div className={"maybeResultsProgressBar"}>{ProgressBar(survey.percentage[2])}</div>
                            </div>
                        </div>
                        <span className={"surveysPollNavButtons"}>
                            <button style={{display: isActiveShowRes ? "flex" : "none" }} onClick={() => { openedSurveysArr[(openedSurveysArr.indexOf(openedSurveysArr.find(d => d.id === SurveyId))+1)%openedSurveysArr.length] ? setSurveyId(openedSurveysArr[(openedSurveysArr.indexOf(openedSurveysArr.find(d => d.id === SurveyId))+1)%openedSurveysArr.length].id) : setSurveyId(openedSurveysArr[0].id)}} className={"nextSurveyButton"}>Next</button>
                            <button onClick={SwitchResult} className={isActiveShowRes ?  "resultSwitchButton" : "seeTheResultsButtonActive"}>{isActiveShowRes ? "See the results" : "Back to survey"}</button>
                        </span>
                    </div>
                </div>
            </div>


            <div style={{display: isActiveOpened ? "none" : "flex"}} className={"surveysSectionContainerClosed"}>
                <div className={"surveysOption-ClosedQuests"}>
                    <div className={"surveysOption-ClosedQuests-head"}>
                        <p>questions</p>
                        <div>
                            <p>
                                DATE
                            </p>
                        </div>
                    </div>
                    <div className={"closedSurveysContainer"}>
                        {listOfClosedItems}
                    </div>
                </div>
                <div style={{display: ClosedSurveyId === 0 ? "none" : "flex" }} className={"userQuiz"}>
                    <span>
                        <p>
                            READER POOL
                        </p>
                        <p>
                            {closedSurvey===undefined ? "" : `${new Date(closedSurvey.date[0]).toLocaleString('en-US', {month: 'short',day:"numeric"})} - ${new Date(closedSurvey.date[1]).toLocaleString('en-US', {month: 'short',day:"numeric"})}`}
                        </p>
                    </span>
                    <div   className={"closedSurveysPollandPoolContainer"}>
                        <p>
                            {closedSurvey===undefined ? "" : closedSurvey.survey}
                        </p>
                        <div style={{display:"flex"}} className={"closedSurveysReaderPool"}>
                            <div>
                                <span>
                                    <p>
                                        Yes
                                    </p>
                                    <p>
                                        {`${closedSurvey.percentage[0]}%`}
                                    </p>
                                </span>
                                <div className={"yesResultsProgressBar"}>{ProgressBar(survey.percentage[0])}</div>
                            </div>
                            <div>
                                <span>
                                    <p>
                                        No
                                    </p>
                                    <p>
                                        {`${closedSurvey.percentage[1]}%`}
                                    </p>
                                </span>
                                <div className={"noResultsProgressBar"}>{ProgressBar(survey.percentage[1])}</div>
                            </div>
                            <div>
                                <span>
                                    <p>
                                        Maybe
                                    </p>
                                    <p>
                                        {`${closedSurvey.percentage[2]}%`}
                                    </p>
                                </span>
                                <div className={"maybeResultsProgressBar"}>{ProgressBar(survey.percentage[2])}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}