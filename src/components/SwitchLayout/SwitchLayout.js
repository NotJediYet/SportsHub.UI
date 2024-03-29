import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {useNavigate} from 'react-router-dom';
import {MdSwapHorizontalCircle} from 'react-icons/md'
import "./SwitchLayout.scss"
import React from 'react';

const LayoutSwitch = () => {
    const navigate = useNavigate();

    let tooltipText, navigateToPage;
    if (window.location.pathname.startsWith('/admin')) {
        tooltipText = "Switch to user view";
        navigateToPage = () => {
            navigate('/');
        };
    } else {
        tooltipText = "Switch to admin view";
        navigateToPage = () => {
            navigate('/admin');
        };
    }

    return (
        <OverlayTrigger offset={[-7,15]} placement={"bottom"} overlay={
            <Tooltip className='overlayCustomStyles'>
                <span className="switch-view-tooltip">{tooltipText}</span>
            </Tooltip>
            }>
            <div aria-label="switcher-div" className="switch-button" onClick={navigateToPage}>
                <MdSwapHorizontalCircle size="40" color='#D72130'/>
            </div>
        </OverlayTrigger>
    );
};

export default LayoutSwitch;