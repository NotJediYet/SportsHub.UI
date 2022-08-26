import React from "react"
import "./AdminContentArea.scss"
import AdminFiltersContentArea from "./AdminFiltersContentArea/AdminFiltersContentArea";
import AdminArticlesContentArea from "./AdminArticlesContentArea/AdminArticlesContentArea";
import AdminSearchContentArea from "./AdminSearchContentArea/AdminSearchContentArea";

const articles = [
    {
        ArticleImage: 'https://miro.medium.com/max/700/0*svYfJQz2cmcnG9nO',
        HeadLine: "As M.L.B.’s Season Opens in Japan, at Least the Dirt Is Familiar",
        Content: "TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of two games between the Oakland Athletics and the Seattle Mariners. But when the teams ",
        Subcategories: "AFC South",
        Team:"Tennessee",
        Status:"Published"
    },
    {
        ArticleImage: 'https://miro.medium.com/max/700/0*svYfJQz2cmcnG9nO',
        HeadLine: "2 As M.L.B.’s Season Opens in Japan, at Least the Dirt Is Familiar",
        Content: "2 TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of two games between the Oakland Athletics and the Seattle Mariners. But when the teams ",
        Subcategories: "AFC West",
        Team:"Tennessee2",
        Status:"Unpublished"
    },
    {
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
            <AdminSearchContentArea articles={articles} />
            <AdminFiltersContentArea />
            <AdminArticlesContentArea articles={articles} />
        </div>
    );
}
