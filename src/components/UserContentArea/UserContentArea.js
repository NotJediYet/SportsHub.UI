import React from "react";
import UserFooter from "../UserFooter/UserFooter";
import UserRightSideBar from "../UserRightSideBar/UserRightSideBar";
import UserPrimaryContentArea from "./UserPrimaryContentArea/UserPrimaryContentArea";
import UserSecondaryContentArea from "./UserSecondaryContentArea/UserSecondaryContentArea";
import UserAdditionalContentArea from "./UserAdditionalContentArea/UserAdditionalContentArea";

export default function UserContentArea(){
    return(
        <div>
            <UserPrimaryContentArea />
            <UserSecondaryContentArea />
            <UserAdditionalContentArea />
            <UserRightSideBar/>
            <UserFooter/>
        </div>
    )
}