import React from "react";
import './TeamHub.scss'


export default function TeamHub(){

    const followedTeams = [
        {
            image: "../images/OvalCopy3.svg",
            name: "Team's name 1",
            description: "first team"
        },
        {
            image: "../images/OvalCopy4.svg",
            name: "Team's name 2",
            description: "second team"
        },
        {
            image: "../images/OvalCopy6.svg",
            name: "Team's name 3",
            description: "third team"
        },
        {
            image: "../images/OvalCopy3.svg",
            name: "Team's name 4",
            description: "fourth team"
        }
    ];

    const followedTeamsList = followedTeams.map((d) => <div><img src={d.image} alt=""/><div><span>{d.name}</span><span>{d.description}</span></div></div>)

    return(
        <div className={"teamhub-container"}>
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