import React from "react";
import ReaderPollResults from "./ReaderPollResults";

export default function ClosedSurveysSection(props){
    const [ClosedSurveyId, setClosedSurveyId] = React.useState(props.closedSurveysArray[0].id);
    const closedSurvey = props.closedSurveysArray.find(element => element.id === ClosedSurveyId);

    const listOfClosedItems = props.closedSurveysArray.map((d) =>
        <div key={d.id}
             onClick={()=>{setClosedSurveyId(d.id)}}
             className={(ClosedSurveyId=== d.id) ? "survey-active" : "survey-not-active"}>
            <p className={(ClosedSurveyId=== d.id) ? "show-active-text" : "hide-not-active-text"}>{d.survey}</p>
            <p>{`${d.date[1].slice(8)}/${d.date[1].slice(5,7)}/${new Date(d.date[1]).getFullYear().toString().slice(-2)}`}</p>
            <div className={(ClosedSurveyId=== d.id) ? "survey-active-border" : ""}></div>
        </div>
    );

    return(
        <div className={"surveys-section-container-closed"}>
            <div className={"surveys-closed-quests"}>
                <div className={"surveys-closed-quests-head"}>
                    <p>questions</p>
                    <div>
                        <p>
                            DATE
                        </p>
                    </div>
                </div>
                <div className={"closed-surveys-container"}>
                    {listOfClosedItems}
                </div>
            </div>
            <div style={{display: props.ClosedSurveyId === 0 ? "none" : "flex" }} className={"user-quiz"}>
                    <span>
                        <p>
                            READER POLL
                        </p>
                        <p>
                            {props.surveys===undefined ? "" : `${new Date(props.surveys.date[0]).toLocaleString('en-US', {month: 'short',day:"numeric"})} - ${new Date(props.surveys.date[1]).toLocaleString('en-US', {month: 'short',day:"numeric"})}`}
                        </p>
                    </span>
                <div className={"closed-surveys-poll-and-pool-container"}>
                    <ReaderPollResults
                        surveys={closedSurvey}
                        ClosedSurveyId={ClosedSurveyId}
                        ProgressBar={props.ProgressBar}
                        class={"closed-surveys-reader-poll-results"}
                    />
                </div>
            </div>
        </div>
    )
}
