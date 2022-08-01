import React, {useState} from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const ProfileComponent = () => {
	const [auth, setAuth] = useState(false);
	const [isUserOpen, setIsUserOpen] = useState(false);

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
						<div className="navbar-dropDown-survey-element">
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