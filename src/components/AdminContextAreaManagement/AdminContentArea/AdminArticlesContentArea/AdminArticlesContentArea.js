import React, {useState, useEffect, useRef} from "react"
import "./AdminArticlesContentArea.scss"
import {FaCircle} from "react-icons/fa";
import {BsThreeDots} from "react-icons/bs";
import {IconContext} from "react-icons";
import ArticleActionMenu from "../../../ArticleActionMenu/ArticleActionMenu"

export default function AdminArticlesContentArea(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState({});

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsMenuOpen(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div>
            {props.articles.map((article) => (
                <div key={article.id} className="article" >
                    <div ref={wrapperRef}>
                        {isMenuOpen && article.id === selectedArticle.id
                        ?  <div className="article-action-menu">
                                <ArticleActionMenu article={article}/>
                            </div>
                        :  <div className="article-action-menu" onClick={(e) => {setIsMenuOpen(true); setSelectedArticle(article)}}>
                                <IconContext.Provider value={{ size: 22 }}>
                                    <BsThreeDots/>
                                </IconContext.Provider>
                            </div>
                        }
                    </div>
                    <img  className="article-image " src={article.image} alt="" width="285" height="160" />
                    <div className="article-body ">
                        <div className="article-headline"> {article.headline}</div>
                        <div className="article-content">{article.content}</div>
                        <div className="article-info">
                            <div>{article.subcategoryName}/{article.teamName}</div>
                            { article.isPublished ?
                                <div className="article-status">
                                    <FaCircle color="00FF00" size="10px"/>
                                    <div className="status-text"> Published </div>
                                </div> :
                                <div className="article-status"> </div>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}