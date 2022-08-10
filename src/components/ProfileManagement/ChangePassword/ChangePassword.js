import React from "react";
import './ChangePassword.scss'
import {FaEye, FaEyeSlash} from 'react-icons/fa';

export default function ChangePassword(){
    const [isOldPasswordShown, setIsOldPasswordShown] = React.useState(false)
    const [isNewPasswordShown, setIsNewPasswordShown] = React.useState(false)
    const [isConfirmationPasswordShown, setIsConfirmationPasswordShown] = React.useState(false)

    return(
        <div>
            <div className={"change-password"}>
                <form action="">
                    <p>
                        <label htmlFor="change-password-first-input">OLD PASSWORD</label>
                        <input id={"change-password-first-input"} type={isOldPasswordShown ? "text" : "password"}/>
                        <FaEye style={{display: isOldPasswordShown ? "none" : "flex"}} onClick={() => {setIsOldPasswordShown(!isOldPasswordShown)}}/>
                        <FaEyeSlash style={{display: isOldPasswordShown ? "flex" : "none"}} onClick={() => {setIsOldPasswordShown(!isOldPasswordShown)}} />
                    </p>
                    <p>
                        <label htmlFor="change-password-second-input">NEW PASSWORD</label>
                        <input id={"change-password-second-input"} type={isNewPasswordShown ? "text" : "password"}/>
                        <FaEye style={{display: isNewPasswordShown ? "none" : "flex"}} onClick={() => {setIsNewPasswordShown(!isNewPasswordShown)}} />
                        <FaEyeSlash style={{display: isNewPasswordShown ? "flex" : "none"}} onClick={() => {setIsNewPasswordShown(!isNewPasswordShown)}} />
                    </p>
                    <p>
                        <label htmlFor="change-password-third-input">PASSWORD CONFIRMATION</label>
                        <input id={"change-password-third-input"} type={isConfirmationPasswordShown ? "text" : "password"}/>
                        <FaEye style={{display: isConfirmationPasswordShown ? "none" : "flex"}} onClick={() => {setIsConfirmationPasswordShown(!isConfirmationPasswordShown)}}/>
                        <FaEyeSlash style={{display: isConfirmationPasswordShown ? "flex" : "none"}} onClick={() => {setIsConfirmationPasswordShown(!isConfirmationPasswordShown)}} />
                    </p>
                    <button type={"submit"}>CHANGE PASSWORD</button>
                </form>
            </div>
        </div>
    )
}