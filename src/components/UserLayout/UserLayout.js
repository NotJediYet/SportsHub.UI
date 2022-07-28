import React from "react";
import UserHeader from "../UserHeader/UserHeader"
import UserLeftSideBar from '../UserLeftSideBar/UserLeftSideBar.js';
import UserFooter from "../UserFooter/UserFooter";
import UserRightSideBar from "../UserRightSideBar/UserRightSideBar";
import UserPrimaryContentArea from "../UserContentArea/UserPrimaryContentArea/UserPrimaryContentArea";
import UserSecondaryContentArea from "../UserContentArea/UserSecondaryContentArea/UserSecondaryContentArea";
import UserAdditionalContentArea from "../UserContentArea/UserAdditionalContentArea/UserAdditionalContentArea";

export default function UserLayout(){
    return(
        <div>
            <UserHeader/>
            <UserPrimaryContentArea />
            <UserSecondaryContentArea />
            <UserAdditionalContentArea />
            <UserLeftSideBar/>
            <UserRightSideBar/>
            <UserFooter/>
        </div>
    )
}


