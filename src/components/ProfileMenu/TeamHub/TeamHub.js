import React from "react";
import './TeamHub.scss'
import {followedTeams} from "../../../services/teamHub-services";


export default function TeamHub(){

    console.log(followedTeams)

    const followedTeamsList = followedTeams.map((d) =>
        <div>
            <img src={d.image} alt=""/>
            <div>
                <span>{d.name}</span>
                <span>{d.description}</span>
            </div>
        </div>
    );

    return(
        <div className={"team-hub-container"}>
            <div>
                <span> YOUR FOLLOWED TEAMS</span>
            </div>
            <div>
                {followedTeamsList}
            </div>
            <div>
                <span>
                    Manage teams list
                </span>
            </div>
        </div>
    )
}