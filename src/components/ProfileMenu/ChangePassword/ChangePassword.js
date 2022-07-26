import React from "react";
import './ChangePassword.scss'
import {FaEye} from 'react-icons/fa';

export default function ChangePassword (){
    const [firstPasswordIsShown, firstPasswordsetIsShown] = React.useState(false)
    const [secondPasswordIsShown, secondPasswordsetIsShown] = React.useState(false)

    return(
        <div>
            <div className={"changePasswordOption"}>
                <form action="">
                    <p>
                        <label htmlFor="changePasswordOption-FirstInput">OLD PASSWORD</label>
                        <input id={"changePasswordOption-FirstInput"} type="text"/>
                    </p>
                    <p>
                        <label htmlFor="changePasswordOption-SecondInput">NEW PASSWORD</label>
                        <input id={"changePasswordOption-SecondInput"} type={firstPasswordIsShown ? "text" : "password"}/>
                        <FaEye onClick={() => {firstPasswordsetIsShown(!firstPasswordIsShown)}}/>
                    </p>
                    <p>
                        <label htmlFor="changePasswordOption-ThirdInput">PASSWORD CONFIRMATION</label>
                        <input id={"changePasswordOption-ThirdInput"} type={secondPasswordIsShown ? "text" : "password"}/>
                        <FaEye onClick={() => {secondPasswordsetIsShown(!secondPasswordIsShown)}}/>
                    </p>
                    <button type={"submit"}>CHANGE PASSWORD</button>
                </form>
            </div>
        </div>
    )
}