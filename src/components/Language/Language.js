import React, {useState, useEffect} from 'react';
import '../Profile/Profile.scss';
import {AiFillCaretDown} from 'react-icons/ai';
import {useLocation} from 'react-router-dom';
import useComponentVisible from '../../rootFunctions/useComponentVisible';

const Language = () => {
	const [language, setLanguage] = useState('EN');
	const [isLangOpen, setIsLangOpen] = useState(false);
	const {pathname} = useLocation();
	const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(true);

	useEffect(() => {
		setIsLangOpen(false);
	}, [pathname]);


	const changeLng = (lng) => {
		setLanguage(lng);
		setIsLangOpen(false);
	};
	useEffect(() => {
		if (!isComponentVisible) {
			setIsLangOpen(false);
			setIsComponentVisible(true);
		}
	}, [isComponentVisible,setIsComponentVisible]);

	const hideButton = (lng) => lng !== language;

	return (
		<div className="navbar-dropDown">
			<div className="navbar-btn" onClick={() => setIsLangOpen(!isLangOpen)}>
				<div>{language}</div>
				<AiFillCaretDown/>
			</div>
			{isLangOpen && <div className="navbar-dropDown-menu" ref={ref}>
				{hideButton('UA') &&
				<div className="navbar-dropDown-element" onClick={() => changeLng('UA')}>
					UA
				</div>
				}
				{hideButton('DE') &&
				<div className="navbar-dropDown-element" onClick={() => changeLng('DE')}>
					DE
				</div>
				}
				{hideButton('FR') &&
				<div className="navbar-dropDown-element" onClick={() => changeLng('FR')}>
					FR
				</div>
				}
				{hideButton('EN') &&
				<div className="navbar-dropDown-element" onClick={() => changeLng('EN')}>
					EN
				</div>
				}
			</div>}
		</div>
	);
};
export default Language;