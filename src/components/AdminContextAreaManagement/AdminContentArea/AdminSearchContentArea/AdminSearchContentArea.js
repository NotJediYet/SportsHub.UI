import React, {useEffect, useState} from "react"
import "./AdminSearchContentArea.scss"
import {BiSearch} from "react-icons/bi";


function AdminSearchContentArea({articles,handleChangeArticles}){
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        let updatedArticles = [];

        if(value) {
            articles.map((article) => {
                let tempArticle = article.content.toLowerCase().indexOf(value.toLowerCase()) !== -1;
                if (tempArticle) {
                    updatedArticles.push(article);
                }
            });
            handleChangeArticles(updatedArticles);
        } else { handleChangeArticles(articles);}
    },[value])

    return (
            <div className="search">
                <div className="search-content">
                    <div className="search-icon">
                        <BiSearch size="25px" color="#7F8899" />
                    </div>
                    <input className="input-style" type="text" value={value} onChange={handleChange} placeholder="Type here to search "/>
                </div>
            </div>
    );
};

export default AdminSearchContentArea;

