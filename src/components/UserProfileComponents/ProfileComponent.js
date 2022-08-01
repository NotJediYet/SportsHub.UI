import React, {useState} from 'react';
import user from '../../../img/Ellipse.svg';
import polygon from '../../../img/Polygon.png';
import "./ProfileComponent.scss"
import { AiFillCaretDown } from 'react-icons/AiFillCaretDown';

const ProfileComponent = () => {
	const [auth, setAuth] = useState(false);

	const [language, setLanguage] = useState('EN');

	const [isLangOpen, setIsLangOpen] = useState(false);

	const [isUserOpen, setIsUserOpen] = useState(false);

	const changeAuth = () => {
		setAuth(!auth);
		console.log(auth);
	};

	const changeLng = (lng) => {
		setLanguage(lng)
		setIsLangOpen(false)
	}
	return (
		<div className="navbar--profile">
			{auth ?
				<div className="navbar-user">
					<img src={user} alt="user"/>
					<div className="user-name">Ivan Baloh</div>
					<div className="navbar-dropDown-survey">
						<div className="navbar-btn" onClick={() => setIsUserOpen(!isUserOpen)}>
							<AiFillCaretDown/>
						</div>
						{isUserOpen && <div className="navbar-dropDown-list">

							<div className="navbar-dropDown-survey-element">
								Ivan Baloh
							</div>
							<div className="navbar-dropDown-survey-element navbar-email-lowercase">
								ivanbaloh@gmail.com
							</div>
							<div className="navbar-dropDown-survey-element">
								View profile
							</div>
							<div className="navbar-dropDown-survey-element">
								Change password
							</div>
							<div className="navbar-dropDown-survey-element">
								My surveys
							</div>
							<div className="navbar-dropDown-survey-element">
								Team Hub
							</div>
							<div className="navbar-dropDown-survey-element" onClick={() => changeAuth()}>
								Log out
							</div>

						</div>}
					</div>

				</div>

				:
				<>
					<div className="navbar-sing_in" onClick={() => changeAuth()}>
						Sign up
					</div>
					<div className="navbar-login" onClick={() => changeAuth()}>
						Login
					</div>
				</>
			}
			<div className="navbar-dropDown">
				<div className="navbar-btn" onClick={() => setIsLangOpen(!isLangOpen)}>
					<div>{language}</div>
					<img src={polygon} alt="arrow"/>
				</div>
				{isLangOpen && <div className="navbar-dropDown-menu">
					<div className="navbar-dropDown-element" onClick={() => changeLng('UA')}>
						UA
					</div>
					<div className="navbar-dropDown-element" onClick={() => changeLng('DE')}>
						DE
					</div>
					<div className="navbar-dropDown-element" onClick={() => changeLng('FR')}>
						FR
					</div>
					<div className="navbar-dropDown-element" onClick={() => changeLng('EN')}>
						EN
					</div>
				</div>}
			</div>
		</div>
	);
};

export default ProfileComponent;