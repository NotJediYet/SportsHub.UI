import React from "react";
import './ProfileInformation.scss'
import {MdPhotoCamera} from 'react-icons/md';

export default function ProfileInformation() {
    return(
        <div>
            <div className={"profile-information"}>
                <div className={"profile-information-photo"}>
                    <img src={"../images/sports-tools_53876-138077.jpg"} alt="error"/>
                    <div className={"profile-information-add-photo"}>
                        <MdPhotoCamera/>
                    </div>
                </div>
                <div className={"profile-information-inputs"}>
                    <form action="">
                        <label htmlFor="profile-information-first-name-input">FIRST NAME</label>
                        <input id={"profile-information-first-name-input"} type="text"/>
                        <label htmlFor="profile-information-last-name-input">LAST NAME</label>
                        <input id={"profile-information-last-name-input"} type="text"/>
                        <label htmlFor="profile-information-email-input">EMAIL</label>
                        <input id={"profile-information-email-input"} type="text"/>
                        <button type={"submit"}>UPDATE PROFILE</button>
                    </form>
                </div>
            </div>
        </div>

    )
}