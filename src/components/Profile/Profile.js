import React, {useEffect, useState} from 'react';
import "./Profile.scss";
import {AiFillCaretDown} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {useLocation} from 'react-router-dom';
import Language from '../Language/Language';

const Profile = () => {
	const [auth, setAuth] = useState(false);
	const [isUserOpen, setIsUserOpen] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	const {pathname} = useLocation();
	useEffect(() => {
		if (pathname.startsWith('/admin')) {
			setIsAdmin(true);
		}
	},[pathname]);

	useEffect(() => {
	},[pathname]);

	const changeAuth = () => {
		setAuth(!auth);
	};
	return (
		<div className="navbar-profile">
			{auth && !isAdmin ?
				<div className="navbar-user">
					<div className="navbar-profile-user-photo">
						<img className="navbar-profile-user-photo" src="" alt=""/>
						<BiUserCircle/>
					</div>
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
					{!isAdmin &&<>
						<div className="navbar-sing_in" onClick={() => changeAuth()}>
							Sign up
						</div>
						<div className="navbar-login" onClick={() => changeAuth()}>
							Login
						</div>
					</>}
				</>
			}
			{!isAdmin &&<>
				<Language/>
			</>}

			{isAdmin &&
			<div>
				<div className="navbar--profile">
					<div className="navbar-user">
						<div className="navbar-user-photo">
							<BiUserCircle/>
						</div>
						<div className="user-name">Brandon Miles
							<div className="navbar-email-lowercase">
								Administrator
							</div>
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
				</div>
			</div>
			}
		</div>

	);
};

export default Profile;