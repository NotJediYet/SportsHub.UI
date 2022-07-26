import {FaChevronDown} from 'react-icons/fa';
import React from "react";

export default function OpenedSurveysSection (props){

    const [isActiveShowResult, setIsActiveShowResult] = React.useState(true);

    function SwitchResultButton(){
        setIsActiveShowResult(!isActiveShowResult);
    }

    return(
        <div style={{display: props.isActiveOpened ? "flex" : "none" }} className={"surveysSectionContainerOpened"}>
            <div className={"surveys-openQuests"}>
                <div className={"surveys-openQuests-head"}>
                    <p>questions</p>
                    <div>
                        <p>
                            Sort by: Most popular
                            <FaChevronDown/>
                        </p>
                    </div>
                </div>
                <div className={"surveysContainerOpened"}>
                    {props.listOfItems}
                </div>
            </div>
            <div style={{display: props.SurveyId === 0 ? "none" : "flex" }} className={"userQuiz"}>
                    <span>
                        <p>
                            {isActiveShowResult ? "READER POLL" :  "READER POOL"}
                        </p>
                        <p>
                            {props.survey===undefined ? "" : `${new Date(props.survey.date[0]).toLocaleString('en-US', {month: 'short',day:"numeric"})} - ${new Date(props.survey.date[1]).toLocaleString('en-US', {month: 'short',day:"numeric"})}`}
                        </p>
                    </span>
                <div   className={"surveysPollandPoolContainer"}>
                    <p>
                        {props.survey===undefined ? "" : props.survey.survey}
                    </p>
                    <div style={{display: isActiveShowResult ? "flex" : "none"}} className={"surveysReaderPoll"}>
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
                    <div style={{display: isActiveShowResult ? "none" : "flex"}} className={"surveysReaderPool"}>
                        <div>
                                <span>
                                    <p>
                                        Yes
                                    </p>
                                    <p>
                                        {`${props.survey.percentage[0]}%`}
                                    </p>
                                </span>
                            <div className={"yesResultsProgressBar"}>
                                {props.ProgressBar(props.survey.percentage[0])}
                            </div>
                        </div>
                        <div>
                                <span>
                                    <p>
                                        No
                                    </p>
                                    <p>
                                        {`${props.survey.percentage[1]}%`}
                                    </p>
                                </span>
                            <div className={"noResultsProgressBar"}>
                                {props.ProgressBar(props.survey.percentage[1])}
                            </div>
                        </div>
                        <div>
                                <span>
                                    <p>
                                        Maybe
                                    </p>
                                    <p>
                                        {`${props.survey.percentage[2]}%`}
                                    </p>
                                </span>
                            <div className={"maybeResultsProgressBar"}>
                                {props.ProgressBar(props.survey.percentage[2])}
                            </div>
                        </div>
                    </div>
                    <span className={"surveysPollNavButtons"}>
                            <button style={{display: isActiveShowResult ? "flex" : "none" }} onClick={() => { props.openedSurveysArray[(props.openedSurveysArray.indexOf(props.openedSurveysArray.find(d => d.id === props.SurveyId))+1)%props.openedSurveysArray.length] ? props.setSurveyId(props.openedSurveysArray[(props.openedSurveysArray.indexOf(props.openedSurveysArray.find(d => d.id === props.SurveyId))+1)%props.openedSurveysArray.length].id) : props.setSurveyId(props.openedSurveysArray[0].id)}} className={"nextSurveyButton"}>Next</button>
                            <button onClick={SwitchResultButton} className={isActiveShowResult ?  "resultSwitchButton" : "seeTheResultsButtonActive"}>{isActiveShowResult ? "See the results" : "Back to survey"}</button>
                        </span>
                </div>
            </div>
        </div>
    )
}