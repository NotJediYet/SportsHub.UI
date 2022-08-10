import React from "react";
import ReaderPool from "../../ReaderPool/ReaderPool";

export default function ClosedSurveysSection(props){

    const [ClosedSurveyId, setClosedSurveyId] = React.useState(props.closedSurveysArray[0].id);
    const closedSurvey = props.closedSurveysArray.find(element => element.id === ClosedSurveyId);

    return(
        <div className={"surveys-section-container-closed"}>
            <table className={"surveys-closed-quests"}>
                <thead>
                <tr className={"surveys-closed-quests-head"}>
                    <th>questions</th>
                    <th>DATE</th>
                </tr>
                </thead>
                <tbody className={"closed-surveys-container"}>
                {
                    props.closedSurveysArray.map((d) =>
                        <tr key={d.id}
                            onClick={()=>{setClosedSurveyId(d.id)}}
                            className={(ClosedSurveyId=== d.id) ? "survey-active" : "survey-not-active"}>
                            <td className={(ClosedSurveyId=== d.id) ? "show-active-text" : "hide-not-active-text"}>{d.survey}</td>
                            <td style={{display: ClosedSurveyId === 0 ? "none" : "flex"}}>{`${d.date[1].slice(8)}/${d.date[1].slice(5,7)}/${new Date(d.date[1]).getFullYear().toString().slice(-2)}`}</td>
                            <td className={(ClosedSurveyId=== d.id) ? "survey-active-border" : ""}></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <ReaderPool
                surveys={closedSurvey}
                ClosedSurveyId={ClosedSurveyId}
                ProgressBar={props.ProgressBar}
                class={"closed-surveys-reader-pool-results"}
                isOpenSurveys={props.isOpenSurveys}
            />
        </div>
    )
}
