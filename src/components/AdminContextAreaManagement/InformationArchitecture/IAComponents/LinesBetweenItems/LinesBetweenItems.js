import React from "react"
import "./LinesBetweenItems.scss"
import "../NavigationMenuItem/NavigationMenuItem.scss"

export default function LinesBetweenItems({startFromItemIndex, toItemsAmount, lineType}) {
    const styleClasses = {left: "left-vertical-line", right: "right-vertical-line"};

    const root = document.documentElement;
    if (lineType === "left") {
        root?.style.setProperty("--subcategory-amount",
            (toItemsAmount > 0) ? (toItemsAmount > startFromItemIndex
                ? toItemsAmount : startFromItemIndex + 1)  : toItemsAmount );
    } else {
        root?.style.setProperty("--teams-amount",
            (toItemsAmount > 0) ? (toItemsAmount > startFromItemIndex
                ? toItemsAmount : startFromItemIndex + 1)  : toItemsAmount );
    }

    return (
        <div className="lines" >
            { (toItemsAmount > 0) &&
                (<>
                    <div className="horizontal-lines" data-testid="lines-from">
                        {Array.from(Array(startFromItemIndex + 1 )).map((x, index) =>
                            <div key={index} className="horizontal-line"
                                 style={{ borderColor: (index === startFromItemIndex) ? "#D4D9E2" : "#FFFEFE"}} />)}
                    </div>
                    <div className={styleClasses[lineType]} data-testid="horizontal-line" />
                    <div className="horizontal-lines" data-testid="lines-to">
                        {Array.from(Array(toItemsAmount)).map((x, index) =>
                            <div key={index} className="horizontal-line"/>)}
                    </div>
                </>)
            }
        </div>
    );
}