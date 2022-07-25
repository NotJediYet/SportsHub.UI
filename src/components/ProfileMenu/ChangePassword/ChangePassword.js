import React from "react";
import './ChangePassword.css'

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
                        <img onClick={() => {firstPasswordsetIsShown(!firstPasswordIsShown)}}
                            src={"../images/hidePasswordIcon.svg"} alt=""
                        />
                    </p>
                    <p>
                        <label htmlFor="changePasswordOption-ThirdInput">PASSWORD CONFIRMATION</label>
                        <input id={"changePasswordOption-ThirdInput"} type={secondPasswordIsShown ? "text" : "password"}/>

                        <img onClick={() => {secondPasswordsetIsShown(!secondPasswordIsShown)}}
                             src={"../images/hidePasswordIcon.svg"} alt=""
                        />
                    </p>
                    <button type={"submit"}>CHANGE PASSWORD</button>
                </form>
            </div>
        </div>
    )
}