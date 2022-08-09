import React, {useState} from 'react';
import "../Profile/Profile.scss"
import {AiFillCaretDown} from 'react-icons/ai';

const Language = () => {
	const [language, setLanguage] = useState('EN');
	const [isLangOpen, setIsLangOpen] = useState(false);
	const changeLng = (lng) => {
		setLanguage(lng)
		setIsLangOpen(false)
	}

	return (
		<div className="navbar-dropDown">
			<div className="navbar-btn" onClick={() => setIsLangOpen(!isLangOpen)}>
				<div>{language}</div>
				<AiFillCaretDown/>
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
	);
}
export default Language;