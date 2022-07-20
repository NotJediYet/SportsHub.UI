import React from "react";
import './TeamHub.css'


export default function TeamHub(){

    const followedTeams = [
        {
            img: "../images/OvalCopy3.svg",
            name: "Team's name 1",
            description: "first team"
        },
        {
            img: "../images/OvalCopy4.svg",
            name: "Team's name 2",
            description: "second team"
        },
        {
            img: "../images/OvalCopy6.svg",
            name: "Team's name 3",
            description: "third team"
        },
        {
            img: "../images/OvalCopy3.svg",
            name: "Team's name 4",
            description: "fourth team"
        }
    ];

    const followedTeamsList = followedTeams.map((d) => <div><img src={d.img} alt=""/><div><span>{d.name}</span><span>{d.description}</span></div></div>)

    return(
        <div className={"teamhub--container"}>
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