import {FaChevronDown} from 'react-icons/fa';
import React from "react";
import ReaderPool from "../../ReaderPool/ReaderPool";

export default function OpenedSurveysTable(props) {
    const [isActiveShowResult, setIsActiveShowResult] = React.useState(true);
    const [SurveyId, setSurveyId] = React.useState(props.openedSurveysArray[0].id);
    const survey = props.openedSurveysArray.find(element => element.id === SurveyId);

    function SwitchResultButton(){
        setIsActiveShowResult(!isActiveShowResult);
    }

    return(
        <div className={"surveys-section-container-opened"}>
            <table className={"surveys-open-quests"}>
                <thead>
                    <tr className={"surveys-open-quests-head"}>
                        <th>QUESTIONS</th>
                        <th>Sort by: Most popular<FaChevronDown/></th>
                    </tr>
                </thead>
                <tbody className={"surveys-container-opened"}>
                    {
                        props.openedSurveysArray.map((d) =>
                            <tr key={d.id}
                                onClick={()=>{setSurveyId(d.id)}}
                                className={(SurveyId=== d.id) ? "survey-active" : "survey-not-active"}>
                                <td className={(SurveyId=== d.id) ? "show-active-text" : "hide-not-active-text"}>{d.survey}</td>
                                <td className={(SurveyId=== d.id) ? "survey-active-border" : ""}></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <ReaderPool
                surveys={survey}
                SurveyId={SurveyId}
                ProgressBar={props.ProgressBar}
                class={"surveys-reader-pool-results"}
                isOpenSurveys={props.isOpenSurveys}
                isActiveShowResult={isActiveShowResult}
                setSurveyId={setSurveyId}
                SwitchButtonResult={SwitchResultButton}
                openedSurveysArray={props.openedSurveysArray}
            />
        </div>
    )
}