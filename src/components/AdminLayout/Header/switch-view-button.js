import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {useNavigate} from "react-router-dom";
import "./Header.scss"

export const SwitchViewButton = ({ tooltip }) => {
    const navigate = useNavigate();
    
    let navigateToPage;
    if (tooltip==="Switch to admin view"){
        navigateToPage = () => {
            navigate('/admin');
        };
    } else {
        navigateToPage = () => {
            navigate('/');
        };
    }
    return (
        <OverlayTrigger offset={[-7,15]} placement={"bottom"} overlay={
            <Tooltip className='overlayCustomStyles'>
                <span className="switch-view-tooltip">{tooltip}</span>
            </Tooltip>
            }>
            <div aria-label="switcher-div" className="switch-button" onClick={navigateToPage}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 
                    26.3888 7.61116 34 17 34Z" fill="#D72130"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.2303 10.5337C11.4229 10.6081 11.55 10.7935 
                    11.55 11V12.93L19.9599 12.93V13.93L11.05 13.93C10.7738 13.93 10.55 13.7061 10.55 13.43V12.2933L7.67573 
                    15.455L10.55 18.6166V17.48C10.55 17.2038 10.7738 16.98 11.05 16.98L19.9599 16.98V17.98L11.55 17.98L11.55 
                    19.9099C11.55 20.1165 11.4229 20.3018 11.2303 20.3763C11.0376 20.4508 10.8189 20.3991 10.68 20.2463L6.63003 
                    15.7913C6.45666 15.6006 6.45666 15.3094 6.63003 15.1186L10.68 10.6637C10.8189 10.5108 11.0376 10.4592 11.2303 
                    10.5337Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.8049 24.4263C21.6122 24.3518 21.4852 24.1665 21.4852 
                    23.9599L21.4852 22.03L13.0753 22.03L13.0753 21.03L21.9852 21.03C22.2613 21.03 22.4852 21.2538 22.4852 
                    21.53L22.4852 22.6666L25.3594 19.505L22.4852 16.3433L22.4852 17.48C22.4852 17.7561 22.2613 17.98 
                    21.9852 17.98L13.0753 17.98L13.0753 16.98L21.4852 16.98L21.4852 15.05C21.4852 14.8434 21.6122 
                    14.6581 21.8049 14.5837C21.9976 14.5092 22.2162 14.5608 22.3552 14.7137L26.4051 
                    19.1686C26.5785 19.3594 26.5785 19.6506 26.4051 19.8413L22.3552 
                    24.2963C22.2162 24.4491 21.9976 24.5008 21.8049 
                    24.4263Z" fill="white"/>
                </svg>
            </div>
        </OverlayTrigger>
    );
};

export default SwitchViewButton;