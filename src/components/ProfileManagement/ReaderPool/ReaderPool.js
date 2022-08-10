import React from "react";

export default function ReaderPool(props){

    const [isActiveShowResult, setIsActiveShowResult] = React.useState(true);

    function SwitchResultButton(){
        setIsActiveShowResult(!isActiveShowResult);
    }

    return(
        <div style={{display: (props.SurveyId === 0 || props.ClosedSurveyId === 0) ? "none" : "flex" }} className={"user-quiz"}>
                    <span>
                        <p>
                            READER POOL
                        </p>
                        <p>
                            {props.surveys===undefined ? "" : `${new Date(props.surveys.date[0]).toLocaleString('en-US', {month: 'short',day:"numeric"})} - ${new Date(props.surveys.date[1]).toLocaleString('en-US', {month: 'short',day:"numeric"})}`}
                        </p>
                    </span>
            <div className={"surveys-pool-container"}>
                <p>
                    {props.surveys===undefined ? "" : props.surveys.survey}
                </p>
                    <div style={{display: (isActiveShowResult && props.isOpenSurveys) ? "flex" : "none"}} className={"surveys-reader-pool"}>
                <span>
                    <input id={"PoolCoice1"} name={"UserPool"} value={"Yes"} type="radio"/>
                    <label htmlFor="PoolCoice1">Yes</label>
                </span>
                        <span>
                    <input id={"PoolCoice2"} name={"UserPool"} value={"No"} type="radio"/>
                    <label htmlFor="PoolCoice2">No</label>
                </span>
                        <span>
                    <input id={"PoolCoice3"} name={"UserPool"} value={"Maybe"} type="radio"/>
                    <label htmlFor="PoolCoice3">Maybe</label>
                </span>
                    </div>
                <div style={{display: (isActiveShowResult===false || props.isOpenSurveys === false)? "flex" : "none"}}>
                    <div style={{display:"flex"}} className={props.class}>
                        <div>
                    <span>
                        <p>
                            Yes
                        </p>
                        <p>
                            {`${props.surveys.percentage[0]}%`}
                        </p>
                    </span>
                            <div className={"yes-results-progress-bar"}>{props.ProgressBar(props.surveys.percentage[0])}</div>
                        </div>
                        <div>
                    <span>
                        <p>
                            No
                        </p>
                        <p>
                            {`${props.surveys.percentage[1]}%`}
                        </p>
                    </span>
                            <div className={"no-results-progress-bar"}>{props.ProgressBar(props.surveys.percentage[1])}</div>
                        </div>
                        <div>
                    <span>
                        <p>
                            Maybe
                        </p>
                        <p>
                            {`${props.surveys.percentage[2]}%`}
                        </p>
                    </span>
                            <div className={"maybe-results-progress-bar"}>{props.ProgressBar(props.surveys.percentage[2])}</div>
                        </div>
                    </div>
                </div>
                <span style={{display: props.isOpenSurveys ? "flex" : "none"}} className={"surveys-pool-navigation-buttons"}>
                    <button style={{display: isActiveShowResult ? "flex" : "none" }} onClick={() => { props.openedSurveysArray[(props.openedSurveysArray.indexOf(props.openedSurveysArray.find(d => d.id === props.SurveyId))+1)%props.openedSurveysArray.length] ? props.setSurveyId(props.openedSurveysArray[(props.openedSurveysArray.indexOf(props.openedSurveysArray.find(d => d.id === props.SurveyId))+1)%props.openedSurveysArray.length].id) : props.setSurveyId(props.openedSurveysArray[0].id)}} className={"next-survey-button"}>Next</button>
                    <button onClick={SwitchResultButton} className={isActiveShowResult ?  "result-switch-button" : "results-button-active"}>{isActiveShowResult ? "See the results" : "Back to survey"}</button>
                </span>
            </div>
        </div>
    )
}