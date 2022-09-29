import { BiMessageCheck, BiGlobe, BiShareAlt, BiCollection, BiBriefcase } from 'react-icons/bi';
import { RiFileList2Line, RiLayoutBottomLine, RiOrganizationChart } from 'react-icons/ri';
import { MdOutlinePeopleAlt } from 'react-icons/md';

export const VerticalMenuElements = [
    {
        title: "Surveys",
        icon: <BiMessageCheck/>,
        link: ""
    },
    {
        title: "Banners",
        icon: <RiFileList2Line/>,
        link: ""
    },
    {
        title: "Languages",
        icon: <BiGlobe/>,
        link: "languages"
    },
    {
        title: "Footer",
        icon: <RiLayoutBottomLine/>,
        link: ""
    },
    {
        title: "Social Networks",
        icon: <BiShareAlt/>,
        link: ""
    },
    {
        title: "Users",
        icon: <MdOutlinePeopleAlt/>,
        link: ""
    },
    {
        title: "IA",
        icon: <RiOrganizationChart/>,
        link: "information-architecture"
    },
    {
        title: "Teams",
        icon: <BiCollection style = {{transform: 'rotate(180deg)' }}/>,
        link: "teams"
    },
    {
        title: "News Partners",
        icon: <BiBriefcase/>,
        link: ""
    },
]

export default VerticalMenuElements;