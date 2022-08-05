import React from "react";

export default function ReaderPoll(props){
    return(
        <div>
            <p>
                {props.survey===undefined ? "" : props.survey.survey}
            </p>
            <div style={{display: props.isActiveShowResult ? "flex" : "none"}} className={"surveys-reader-poll"}>
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
        </div>
    )
}