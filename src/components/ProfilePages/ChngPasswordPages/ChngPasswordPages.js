import React from "react";
import './ChngPasswordPages.css'

export default function ChngPasswordPages (){
    const [firstPasswordIsShown, firstPasswordsetIsShown] = React.useState(false)
    const [secondPasswordIsShown, secondPasswordsetIsShown] = React.useState(false)

    return(
        <div>
            <div className={"ChngPasswordOption"}>
                <form action="">
                    <p>
                        <label htmlFor="ChngPasswordOption-FirstInput">OLD PASSWORD</label>
                        <input id={"ChngPasswordOption-FirstInput"} type="text"/>
                    </p>
                    <p>
                        <label htmlFor="ChngPasswordOption-SecondInput">NEW PASSWORD</label>
                        <input id={"ChngPasswordOption-SecondInput"} type={firstPasswordIsShown ? "text" : "password"}/>
                        <img onClick={() => {firstPasswordsetIsShown(!firstPasswordIsShown)}}
                            src={"../images/hidePasswordIcon.svg"} alt=""
                        />
                    </p>
                    <p>
                        <label htmlFor="ChngPasswordOption-ThirdInput">PASSWORD CONFIRMATION</label>
                        <input id={"ChngPasswordOption-ThirdInput"} type={secondPasswordIsShown ? "text" : "password"}/>

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