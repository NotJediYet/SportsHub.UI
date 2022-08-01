import React, {useState} from 'react';
import user from '../../../../img/Ellipse.svg';
import polygon from '../../../../img/Polygon.png';
import { AiFillCaretDown } from 'react-icons/AiFillCaretDown';

const ProfileComponent = () => {
	const [auth, setAuth] = useState(false);
	const [isUserOpen, setIsUserOpen] = useState(false);
	const changeAuth = () => {
		setAuth(!auth);
		console.log(auth);
	};
	return (
		<div className="navbar--profile">
			<div className="navbar-user">
				<div className="user-name">Brandon Miles</div>
				<div className="navbar-dropDown-survey-element navbar-email-lowercase">
					administrator
				</div>
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
						<div className="navbar-dropDown-survey-element" onClick={() => changeAuth()}>
							<div className="navbar-logout">Log out</div>
						</div>

					</div>}
				</div>

			</div>


			}

		</div>
	);
};

export default ProfileComponent;