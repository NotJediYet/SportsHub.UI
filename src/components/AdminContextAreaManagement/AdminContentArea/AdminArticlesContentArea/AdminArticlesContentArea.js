import React from "react"
import "./AdminArticlesContentArea.scss"
import {FaCircle} from "react-icons/fa";

export default function AdminArticlesContentArea(props) {

        return (
        <div>
            { props.articles.map((article) => (
                <div key={article.id} className="article" >
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
                                <div className="article-status"></div>
                            }
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
        )
}

