import React from "react";
import './TeamHub.scss'
import GetFollowedTeams from "../../../services/TeamHubServices";


export default function TeamHub(){
    return(
        <div className={"team-hub-container"}>
            <div>
                <span> YOUR FOLLOWED TEAMS</span>
            </div>
            <div>
                <GetFollowedTeams/>
            </div>
            <div>
                <span>
                    Manage teams list
                </span>
            </div>
        </div>
    )
}