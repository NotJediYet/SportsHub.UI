import React from "react";
import './ChangePassword.scss'
import {FaEye, FaEyeSlash} from 'react-icons/fa';

export default function ChangePassword(){
    const [firstPasswordIsShown, setFirstPasswordIsShown] = React.useState(false)
    const [secondPasswordIsShown, setSecondPasswordIsShown] = React.useState(false)
    const [thirdPasswordIsShown, setThirdPasswordIsShown] = React.useState(false)

    return(
        <div>
            <div className={"change-password"}>
                <form action="">
                    <p>
                        <label htmlFor="change-password-first-input">OLD PASSWORD</label>
                        <input id={"change-password-first-input"} type={firstPasswordIsShown ? "text" : "password"}/>
                        <FaEye style={{display: firstPasswordIsShown ? "none" : "flex"}} onClick={() => {setFirstPasswordIsShown(!firstPasswordIsShown)}}/>
                        <FaEyeSlash style={{display: firstPasswordIsShown ? "flex" : "none"}} onClick={() => {setFirstPasswordIsShown(!firstPasswordIsShown)}} />
                    </p>
                    <p>
                        <label htmlFor="change-password-second-input">NEW PASSWORD</label>
                        <input id={"change-password-second-input"} type={secondPasswordIsShown ? "text" : "password"}/>
                        <FaEye style={{display: secondPasswordIsShown ? "none" : "flex"}} onClick={() => {setSecondPasswordIsShown(!secondPasswordIsShown)}} />
                        <FaEyeSlash style={{display: secondPasswordIsShown ? "flex" : "none"}} onClick={() => {setSecondPasswordIsShown(!secondPasswordIsShown)}} />
                    </p>
                    <p>
                        <label htmlFor="change-password-third-input">PASSWORD CONFIRMATION</label>
                        <input id={"change-password-third-input"} type={thirdPasswordIsShown ? "text" : "password"}/>
                        <FaEye style={{display: thirdPasswordIsShown ? "none" : "flex"}} onClick={() => {setThirdPasswordIsShown(!thirdPasswordIsShown)}}/>
                        <FaEyeSlash style={{display: thirdPasswordIsShown ? "flex" : "none"}} onClick={() => {setThirdPasswordIsShown(!thirdPasswordIsShown)}} />
                    </p>
                    <button type={"submit"}>CHANGE PASSWORD</button>
                </form>
            </div>
        </div>
    )
}