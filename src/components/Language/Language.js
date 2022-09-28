import '../Profile/Profile.scss';
import {useState, useEffect, useContext} from 'react';
import {AiFillCaretDown} from 'react-icons/ai';
import {useLocation} from 'react-router-dom';
import useComponentVisible from '../../rootFunctions/useComponentVisible';
import { Context } from '../ContextProvider/ContextProvider';

const Language = () => {
	const {isDataLoading} = useContext(Context);
	const {languages} = useContext(Context);
	const [selectedLanguage, setSelectedLanguage] = useState({})
	const [isLangOpen, setIsLangOpen] = useState(false);
	const {pathname} = useLocation();
	const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(true);

	useEffect(() => {
		setIsLangOpen(false);
	}, [pathname]);

	const changeLng = (lng) => {
		setSelectedLanguage(lng);
		setIsLangOpen(false);
	};

	useEffect(() => {
		if (!isComponentVisible) {
			setIsLangOpen(false);
			setIsComponentVisible(true);
		}
	}, [isComponentVisible,setIsComponentVisible]);

	return (
		<div className="navbar-dropDown">
			<div className="navbar-btn" onClick={() => {setIsLangOpen(!isLangOpen)}}>
				<div>{selectedLanguage.code}</div>
				<AiFillCaretDown/>
			</div>
			{isLangOpen && <div className="navbar-dropDown-menu" ref={ref}>
				{languages.map((language) => 
					!language.isHidden && language.code !== selectedLanguage.code &&
					<div key={language.code} className="navbar-dropDown-element" onClick={() => changeLng(language)}>
						{language.code}
					</div>
				)}
			</div>}
		</div>
	);
};
export default Language;