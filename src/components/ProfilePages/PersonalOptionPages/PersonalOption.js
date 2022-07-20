import React from "react";
import './PersonalOption.css'

export default function PersonalOption() {
    return(
        <div>
            <div className={"personalOption"}>
                <div className={"personalOption--photo"}>
                    <img src={"../images/Ellipse.svg"} alt="error"/>
                    <div className={"personalOption--addPhoto"}>
                        <img src={"../images/Vector.svg"} alt=""/>
                        <img src={"../images/Vector-1.svg"} alt=""/>
                    </div>
                </div>
                <div className={"personalOption-inputs"}>
                    <form action="">
                        <label htmlFor="personalOption-FirNameInput">FIRST NAME</label>
                        <input id={"personalOption-FirNameInput"} type="text"/>
                        <label htmlFor="personalOption-LasNameInput">LAST NAME</label>
                        <input id={"personalOption-LasNameInput"} type="text"/>
                        <label htmlFor="personalOption-EmailInput">EMAIL</label>
                        <input id={"personalOption-EmailInput"} type="text"/>
                        <button type={"submit"}>UPDATE PROFILE</button>
                    </form>
                </div>
            </div>
        </div>

    )
}