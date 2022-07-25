import React from "react";
import './ProfileInformation.scss'

export default function ProfileInformation() {
    return(
        <div>
            <div className={"profileInformation"}>
                <div className={"profileInformation-photo"}>
                    <img src={"../images/Ellipse.svg"} alt="error"/>
                    <div className={"profileInformation-addPhoto"}>
                        <img src={"../images/Vector.svg"} alt=""/>
                        <img src={"../images/Vector-1.svg"} alt=""/>
                    </div>
                </div>
                <div className={"profileInformation-inputs"}>
                    <form action="">
                        <label htmlFor="profileInformation-FirNameInput">FIRST NAME</label>
                        <input id={"profileInformation-FirNameInput"} type="text"/>
                        <label htmlFor="profileInformation-LasNameInput">LAST NAME</label>
                        <input id={"profileInformation-LasNameInput"} type="text"/>
                        <label htmlFor="profileInformation-EmailInput">EMAIL</label>
                        <input id={"profileInformation-EmailInput"} type="text"/>
                        <button type={"submit"}>UPDATE PROFILE</button>
                    </form>
                </div>
            </div>
        </div>

    )
}