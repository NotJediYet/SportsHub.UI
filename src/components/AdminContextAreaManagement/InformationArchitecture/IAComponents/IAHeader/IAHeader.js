import "./IAHeader.scss"
import {useContext} from "react";
import {Context} from "../../../../ContextProvider/ContextProvider";

export default function IAHeader(){
    const {AISaveButtonClicked, setAISaveButtonClicked} = useContext(Context)
    return(
        <div className={"ia-header"}>
            <p>Information Architecture</p>
            <div className={"ia-header-button"}
                 onClick={() => {if (!AISaveButtonClicked) setAISaveButtonClicked(!AISaveButtonClicked)}}>
                Save
            </div>
        </div>
    )
}