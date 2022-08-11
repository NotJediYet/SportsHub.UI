import React from "react";
import './TeamHub.scss'
import GetFollowedTeams from "../../../services/TeamHub/TeamHubService";

const followedTeams = GetFollowedTeams();
function FollowedTeamsComponent(){
    return followedTeams.map((d) =>
        <div>
            <img src={d.image} alt=""/>
            <div>
                <span>{d.name}</span>
                <span>{d.description}</span>
            </div>
        </div>
    );
}

export default function TeamHub(){
    return(
        <div className={"team-hub-container"}>
            <div>
                <span>YOUR FOLLOWED TEAMS</span>
            </div>
            <div>
                <FollowedTeamsComponent/>
            </div>
            <div>
                <span>Manage teams list</span>
            </div>
        </div>
    )
}