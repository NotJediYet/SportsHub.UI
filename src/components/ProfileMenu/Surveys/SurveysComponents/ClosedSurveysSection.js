export default function ClosedSurveysSection(props){
    return(
        <div style={{display: props.isActiveOpened ? "none" : "flex"}} className={"surveys-section-container-closed"}>
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
                    {props.listOfClosedItems}
                </div>
            </div>
            <div style={{display: props.ClosedSurveyId === 0 ? "none" : "flex" }} className={"user-quiz"}>
                    <span>
                        <p>
                            READER POOL
                        </p>
                        <p>
                            {props.closedSurvey===undefined ? "" : `${new Date(props.closedSurvey.date[0]).toLocaleString('en-US', {month: 'short',day:"numeric"})} - ${new Date(props.closedSurvey.date[1]).toLocaleString('en-US', {month: 'short',day:"numeric"})}`}
                        </p>
                    </span>
                <div   className={"closed-surveys-poll-and-pool-container"}>
                    <p>
                        {props.closedSurvey===undefined ? "" : props.closedSurvey.survey}
                    </p>
                    <div style={{display:"flex"}} className={"closed-surveys-reader-pool"}>
                        <div>
                                <span>
                                    <p>
                                        Yes
                                    </p>
                                    <p>
                                        {`${props.closedSurvey.percentage[0]}%`}
                                    </p>
                                </span>
                            <div className={"yes-results-progress-bar"}>{props.ProgressBar(props.closedSurvey.percentage[0])}</div>
                        </div>
                        <div>
                                <span>
                                    <p>
                                        No
                                    </p>
                                    <p>
                                        {`${props.closedSurvey.percentage[1]}%`}
                                    </p>
                                </span>
                            <div className={"no-results-progress-bar"}>{props.ProgressBar(props.closedSurvey.percentage[1])}</div>
                        </div>
                        <div>
                                <span>
                                    <p>
                                        Maybe
                                    </p>
                                    <p>
                                        {`${props.closedSurvey.percentage[2]}%`}
                                    </p>
                                </span>
                            <div className={"maybe-results-progress-bar"}>{props.ProgressBar(props.closedSurvey.percentage[2])}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
