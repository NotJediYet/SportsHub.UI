import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {useNavigate} from 'react-router-dom';
import {SwitchButtonIcon} from './switchButtonIcon.js'
import "./AdminHeader.scss"
import React from 'react';

const LayoutSwitch = ({ role }) => {
    const navigate = useNavigate();

    let tooltipText, navigateToPage;
    if (role === 'user'){
        tooltipText = "Switch to admin view";
        navigateToPage = () => {
            navigate('/admin');
        };
    } else if (role === 'admin') {
        tooltipText = "Switch to user view";
        navigateToPage = () => {
            navigate('/');
        };
    }
    return (
        <OverlayTrigger offset={[-7,15]} placement={"bottom"} overlay={
            <Tooltip className='overlayCustomStyles'>
                <span className="switch-view-tooltip">{tooltipText}</span>
            </Tooltip>
            }>
            <div aria-label="switcher-div" className="switch-button" onClick={navigateToPage}>
                <SwitchButtonIcon size="34" />
            </div>
        </OverlayTrigger>
    );
};

export default LayoutSwitch;