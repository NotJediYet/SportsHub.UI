import { useContext } from "react";
import { Context } from "../../../ContextProvider/ContextProvider";
import "./HeaderTeams.scss";

export default function HeaderTeams(){

    const {teamsButtonText, setTeamsButtonText} = useContext(Context);
    return(
        <div className={"header-teams"}>
            <p>Teams</p>
            <div className={"header-teams-button"} onClick={() => {if(teamsButtonText!=="Add to list")setTeamsButtonText("Add to list")}}>+ Add team</div>
        </div>
    )
}