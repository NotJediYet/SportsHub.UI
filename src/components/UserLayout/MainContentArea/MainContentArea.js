import PrimaryContentArea from "../PrimaryContentArea/PrimaryContentArea";
import SecondaryContentArea from "../SecondaryContentArea/SecondaryContentArea";
import AdditionalContentArea from "../AdditionalContentArea/AdditionalContentArea";

export default function MainContentArea(){
    return(
        <div>
            <PrimaryContentArea />
            <SecondaryContentArea />
            <AdditionalContentArea />
        </div>
    )
}