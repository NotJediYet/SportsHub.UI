import React from "react"
import "./AdminContentArea.scss"
import AdminFiltersContentArea from "../AdminFiltersContentArea/AdminFiltersContentArea";
import AdminArticlesContentArea from "../AdminArticlesContentArea/AdminArticlesContentArea";
import AdminSearchContentArea from "../AdminSearchContentArea/AdminSearchContentArea";

const articles = [
    {
        Id: 'd95a7a26-eb68-4af2-907e-0cbedd40daf7',
        ArticleImage: 'https://miro.medium.com/max/700/0*svYfJQz2cmcnG9nO',
        HeadLine: "As M.L.B.’s Season Opens in Japan, at Least the Dirt Is Familiar",
        Content: "TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of two games between the Oakland Athletics and the Seattle Mariners. But when the teams ",
        Subcategories: "AFC South",
        Team:"Tennessee",
        Status:"Published"
    },
    {   Id: '88666160-6a39-4a4d-8839-7874472ad412',
        ArticleImage: 'https://miro.medium.com/max/700/0*svYfJQz2cmcnG9nO',
        HeadLine: "2 As M.L.B.’s Season Opens in Japan, at Least the Dirt Is Familiar",
        Content: "2 TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of two games between the Oakland Athletics and the Seattle Mariners. But when the teams ",
        Subcategories: "AFC West",
        Team:"Tennessee2",
        Status:"Unpublished"
    },
    {   Id: '6c308c3c-0c97-4177-8a4d-31881cbe80f8',
        ArticleImage: 'https://miro.medium.com/max/700/0*svYfJQz2cmcnG9nO',
        HeadLine: "headline article3",
        Content: "some text3",
        Subcategories: "subcatedory3",
        Team:"teamm3",
        Status:"Published"
    }
];

export default function AdminContentArea() {

    return (
        <div className="content-area">
            <AdminSearchContentArea />
            <AdminFiltersContentArea />
            <AdminArticlesContentArea articles={articles} />
        </div>
    );
}
