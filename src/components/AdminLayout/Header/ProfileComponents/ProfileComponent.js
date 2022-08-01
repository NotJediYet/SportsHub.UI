import React, {useState} from 'react';
import user from '../../../../img/Ellipse.svg';
import polygon from '../../../../img/Polygon.png';
import "./ProfileComponent.css"


const ProfileComponent = () => {
	const [auth, setAuth] = useState(false);



	const [isUserOpen, setIsUserOpen] = useState(false);

	const changeAuth = () => {
		setAuth(!auth);
		console.log(auth);
	};

	return (
		<div className="navbar--profile">
			<div className="navbar-user" >
				<img src={user} alt="user"/>
				<div className="user-name">Brandon Miles
				<div className="navbar-email-lowercase">
					Administrator
				</div>
				</div>
				<div className="navbar-dropDown-survey">
					<div className="navbar-btn" onClick={() => setIsUserOpen(!isUserOpen)}>
						<img src={polygon} alt="arrow"/>
					</div>
					{isUserOpen && <div className="navbar-dropDown-list">

						<div className="navbar-dropDown-survey-element">
							Ivan Baloh
						</div>
						<div className="navbar-dropDown-survey-element navbar-email-lowercase">
							balohadmin@gmail.com
						</div>
						<div className="navbar-dropDown-survey-element" onClick={() => changeAuth()}>
							<div className="navbar-logout">Log out</div>
						</div>

					</div>}
				</div>

			</div>
		</div>
	);
};

export default ProfileComponent;