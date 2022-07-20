import React from "react"
import "./AdditionalContentArea.css"

const SampleText ="Lorem ipsum dolor sit amet. Id possimus deleniti cum sapiente blanditiis ad autem Quis"
const SampleImg ="https://www.beelights.gr/assets/images/empty-image.png"

export default function AdditionalContentArea() {
    return (
        <div className="additional-Content-Area">

            <div className="photo-of-the-day-box">
                <a href="/#" className="photo-of-the-day-box-text">{SampleText}</a>
            </div>

            <div className="Additional-small-new-box">

                <div className="row-for-small-news">

                    <div className="additional-small-new">
                        <img src={SampleImg}  alt="#" className="additional-small-new-photo"></img>
                        <a href="/#" className="additional-small-new-text">{SampleText}</a>
                    </div>
                    <div className="additional-small-new">
                        <img src={SampleImg}  alt="#" className="additional-small-new-photo"></img>
                        <a href="/#" className="additional-small-new-text">{SampleText}</a>
                    </div>
                    <div className="additional-small-new">
                        <img src={SampleImg}  alt="#" className="additional-small-new-photo"></img>
                        <a href="/#" className="additional-small-new-text">{SampleText}</a>
                    </div>

                </div>

                <div className="row-for-small-news">

                    <div className="additional-small-new">
                        <img src={SampleImg}  alt="#" className="additional-small-new-photo"></img>
                        <a href="/#" className="additional-small-new-text">{SampleText}</a>
                    </div>
                    <div className="additional-small-new">
                        <img src={SampleImg}  alt="#" className="additional-small-new-photo"></img>
                        <a href="/#" className="additional-small-new-text">{SampleText}</a>
                    </div>
                    <div className="additional-small-new">
                        <img src={SampleImg}  alt="#" className="additional-small-new-photo"></img>
                        <a href="/#" className="additional-small-new-text">{SampleText}</a>
                    </div>

                    </div>

                </div>

            </div>
    );
}