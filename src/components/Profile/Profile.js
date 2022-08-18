import React, {useEffect, useState} from 'react';
import './Profile.scss';
import {AiFillCaretDown} from 'react-icons/ai';
import {Link, useLocation} from 'react-router-dom';
import Language from '../Language/Language';
import {useAuth0} from '@auth0/auth0-react';

const Profile = () => {
	const {isAuthenticated, user, loginWithRedirect, logout} = useAuth0();
	const [isUserOpen, setIsUserOpen] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	const {pathname} = useLocation();

	useEffect(() => {
		setIsUserOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (pathname.startsWith('/admin')) {
			setIsAdmin(true);
		}
	}, [pathname]);

	return (
		<div className="navbar-profile">
			{isAuthenticated && !isAdmin ?
				<div className="navbar-user">
					<div className="navbar-profile-user-photo">
						<img className="navbar-profile-user-photo" src={user?.picture} alt=""/>
					</div>
					<div className="user-name">{user?.name}</div>
					<div className="navbar-dropDown-survey">
						<div className="navbar-btn" onClick={() => setIsUserOpen(!isUserOpen)}>
							<AiFillCaretDown/>
						</div>
						{isUserOpen && <div className="navbar-dropDown-list">
							<div className="navbar-dropDown-survey-element">
								{user?.name}
							</div>
							<div className="navbar-dropDown-survey-element navbar-email-lowercase">
								{user?.email}
							</div>
							<Link to="/profile" className="navbar-dropDown-survey-element">
								View profile
							</Link>
							<Link to="/profile/change-password" className="navbar-dropDown-survey-element">
								Change password
							</Link>
							<Link to="/profile/surveys" className="navbar-dropDown-survey-element">
								My surveys
							</Link>
							<Link to="/profile/team-hub" className="navbar-dropDown-survey-element">
								Team hub
							</Link>
							<div className="navbar-dropDown-survey-element" onClick={() => logout()}>
								Log out
							</div>
						</div>}
					</div>
				</div>
				:
				<>
					{!isAdmin && <>
						<div className="navbar-sing_in" onClick={() => loginWithRedirect({initialScreen: 'signup'})}>
							Sign up
						</div>
						<div className="navbar-login" onClick={() => loginWithRedirect()}>
							Log in
						</div>
					</>}
				</>
			}
			{!isAdmin && <>
				<Language/>
			</>}
			{isAdmin &&
			<div>
				<div className="navbar-user">
					<div className="navbar-user-photo">
						<img className="navbar-profile-user-photo" src={user?.picture} alt=""/>
					</div>
					<div className="user-name">{user?.name}
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
								{user?.name}
							</div>
							<div className="navbar-dropDown-survey-element navbar-email-lowercase">
								{user?.email}
							</div>
							<div className="navbar-dropDown-survey-element" onClick={() => logout()}>
								 Log out
							</div>
						</div>}
					</div>
					<div className="admin-language-switch">
						<Language/>
					</div>
				</div>
			</div>
			}
		</div>
	);
};

export default Profile;