import React from "react"
import "./UserPrimaryContentArea.scss"

const SampleText ="Lorem ipsum dolor sit amet. Id possimus deleniti cum sapiente blanditiis ad autem Quis"
const SampleImg ="https://www.beelights.gr/assets/images/empty-image.png"

export default function UserPrimaryContentArea() {
    return (
        <div className="primary-content-area">

            <div className="main-article">
                <div className="main-article-picture">
                    <a href="/#" className="main-article-description">Title, Subtitle, publishing date, CTA</a>
                </div>
            </div>

            <div className="sub-articles">

                <div className="sub-article">
                    <img src={SampleImg} alt="#" className="sub-article-picture"></img>
                    <a href="/#" className="sub-article-text">{SampleText}</a>
                </div>
                <div className="sub-article">
                    <img src={SampleImg} alt="#" className="sub-article-picture"></img>
                    <a href="/#" className="sub-article-text">{SampleText}</a>
                </div>
                <div className="sub-article">
                    <img src={SampleImg} alt="#" className="sub-article-picture"></img>
                    <a href="/#" className="sub-article-text">{SampleText}</a>
                </div>
                <div className="sub-article">
                    <img src={SampleImg} alt="#" className="sub-article-picture"></img>
                    <a href="/#" className="sub-article-text">{SampleText}</a>
                </div>

            </div>

        </div>
    );
}