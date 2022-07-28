import React from "react";
import './ChangePassword.scss'
import {FaEye} from 'react-icons/fa';

export default function ChangePassword (){
    const [firstPasswordIsShown, firstPasswordsetIsShown] = React.useState(false)
    const [secondPasswordIsShown, secondPasswordsetIsShown] = React.useState(false)

    return(
        <div>
            <div className={"change-password"}>
                <form action="">
                    <p>
                        <label htmlFor="change-password-first-input">OLD PASSWORD</label>
                        <input id={"change-password-first-input"} type="text"/>
                    </p>
                    <p>
                        <label htmlFor="change-password-second-input">NEW PASSWORD</label>
                        <input id={"change-password-second-input"} type={firstPasswordIsShown ? "text" : "password"}/>
                        <FaEye size="300" onClick={() => {firstPasswordsetIsShown(!firstPasswordIsShown)}}/>
                    </p>
                    <p>
                        <label htmlFor="change-password-third-input">PASSWORD CONFIRMATION</label>
                        <input id={"change-password-third-input"} type={secondPasswordIsShown ? "text" : "password"}/>
                        <FaEye onClick={() => {secondPasswordsetIsShown(!secondPasswordIsShown)}}/>
                    </p>
                    <button type={"submit"}>CHANGE PASSWORD</button>
                </form>
            </div>
        </div>
    )
}