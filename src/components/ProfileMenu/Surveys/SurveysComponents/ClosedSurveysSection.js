export default function ClosedSurveysSection(props){
    return(
        <div style={{display: props.isActiveOpened ? "none" : "flex"}} className={"surveysSectionContainerClosed"}>
            <div className={"surveys-ClosedQuests"}>
                <div className={"surveys-ClosedQuests-head"}>
                    <p>questions</p>
                    <div>
                        <p>
                            DATE
                        </p>
                    </div>
                </div>
                <div className={"closedSurveysContainer"}>
                    {props.listOfClosedItems}
                </div>
            </div>
            <div style={{display: props.ClosedSurveyId === 0 ? "none" : "flex" }} className={"userQuiz"}>
                    <span>
                        <p>
                            READER POOL
                        </p>
                        <p>
                            {props.closedSurvey===undefined ? "" : `${new Date(props.closedSurvey.date[0]).toLocaleString('en-US', {month: 'short',day:"numeric"})} - ${new Date(props.closedSurvey.date[1]).toLocaleString('en-US', {month: 'short',day:"numeric"})}`}
                        </p>
                    </span>
                <div   className={"closedSurveysPollandPoolContainer"}>
                    <p>
                        {props.closedSurvey===undefined ? "" : props.closedSurvey.survey}
                    </p>
                    <div style={{display:"flex"}} className={"closedSurveysReaderPool"}>
                        <div>
                                <span>
                                    <p>
                                        Yes
                                    </p>
                                    <p>
                                        {`${props.closedSurvey.percentage[0]}%`}
                                    </p>
                                </span>
                            <div className={"yesResultsProgressBar"}>{props.ProgressBar(props.closedSurvey.percentage[0])}</div>
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
                            <div className={"noResultsProgressBar"}>{props.ProgressBar(props.closedSurvey.percentage[1])}</div>
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
                            <div className={"maybeResultsProgressBar"}>{props.ProgressBar(props.closedSurvey.percentage[2])}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
