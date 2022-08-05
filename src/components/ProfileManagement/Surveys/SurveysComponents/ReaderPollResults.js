import React from "react";

export default function ReaderPollResults(props){
    return(
        <div>
            <p>
                {props.surveys===undefined ? "" : props.surveys.survey}
            </p>
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
    )
}