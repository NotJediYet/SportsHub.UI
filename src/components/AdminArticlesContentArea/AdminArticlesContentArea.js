import React from "react"
import "./AdminArticlesContentArea.scss"
import {FaCircle} from "react-icons/fa";

export default function AdminArticlesContentArea(props) {

        return (
            <div>
                {props.articles.map((article) => (
                    <div key={article.Id} className="article">
                        <img  src={article.ArticleImage} alt="" width="285" height="160" />
                        <div className="article-body">
                            <div className="article-headline"> {article.HeadLine}</div>
                            <div className="article-content">{article.Content}</div>
                            <div className="article-info">
                                <div>{article.Subcategories}/{article.Team}</div>
                                { article.Status === "Published" ?
                                    <div className="article-status">
                                       <FaCircle color="00FF00" size="10px"/>
                                        <div className="status-text"> Published </div>
                                    </div> :
                                    <div className="article-status"></div> }
                            </div>
                        </div>
                    </div>
                   ))}
            </div>
        );
    }

