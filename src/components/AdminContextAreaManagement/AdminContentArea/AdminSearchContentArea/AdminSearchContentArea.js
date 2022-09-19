import React, {useState} from "react"
import "./AdminSearchContentArea.scss"
import {BiSearch} from "react-icons/bi";


function AdminSearchContentArea({articles,handleChangeArticles}){
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        let updatedArticles = [];
        setValue(event.target.value);

        if(event.target.value) {
            articles.forEach((article) => {
                let tempArticle = article.headline.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
                if(tempArticle) {
                    updatedArticles.push(article);
                }
            });
            handleChangeArticles(updatedArticles, true);
        } else { handleChangeArticles(articles, false);}
    }

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
}

export default AdminSearchContentArea;