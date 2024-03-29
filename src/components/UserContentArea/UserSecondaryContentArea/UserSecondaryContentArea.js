import React from "react"
import "./UserSecondaryContentArea.scss"

const SampleText ="Lorem ipsum dolor sit amet. Id possimus deleniti cum sapiente blanditiis ad autem Quis"
const SampleImg ="https://www.beelights.gr/assets/images/empty-image.png"

export default function UserSecondaryContentArea() {
    return (
        <div className="secondary-content-area">

            <div className="secondary-big-new-box">

                <div className="secondary-big-new">
                    <img src={SampleImg} alt="#" className="secondary-big-new-picture"></img>
                    <a href="/#" className="secondary-big-new-text">{SampleText}</a>
                </div>

                <div className="new-split"></div>

                <div className="secondary-big-new">
                    <img src={SampleImg} alt="#" className="secondary-big-new-picture"></img>
                    <a href="/#" className="secondary-big-new-text">{SampleText}</a>
                </div>

            </div>

            <div className="secondary-small-new-box">

                <div className="column-small-new">
                    <div className="secondary-small-new">
                        <img src={SampleImg} alt="#" className="secondary-small-new-picture"></img>
                        <a href="/#" className="secondary-small-new-text">{SampleText}</a>
                    </div>
                    <div className="secondary-small-new">
                        <img src={SampleImg} alt="#" className="secondary-small-new-picture"></img>
                        <a href="/#" className="secondary-small-new-text">{SampleText}</a>
                    </div>
                    <div className="secondary-small-new">
                        <img src={SampleImg} alt="#" className="secondary-small-new-picture"></img>
                        <a href="/#" className="secondary-small-new-text">{SampleText}</a>
                    </div>
                </div>

                <div className="column-small-new">
                    <div className="secondary-small-new">
                        <img src={SampleImg} alt="#" className="secondary-small-new-picture"></img>
                        <a href="/#" className="secondary-small-new-text">{SampleText}</a>
                    </div>
                    <div className="secondary-small-new">
                        <img src={SampleImg} alt="#" className="secondary-small-new-picture"></img>
                        <a href="/#" className="secondary-small-new-text">{SampleText}</a>
                    </div>
                    <div className="secondary-small-new">
                        <img src={SampleImg} alt="#" className="secondary-small-new-picture"></img>
                        <a href="/#" className="secondary-small-new-text">{SampleText}</a>
                    </div>
                </div>

            </div>

        </div>
    );
}