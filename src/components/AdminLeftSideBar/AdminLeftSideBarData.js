import { BiMessageCheck, BiGlobe, BiShareAlt, BiCollection, BiBriefcase } from 'react-icons/bi';
import { RiFileList2Line, RiLayoutBottomLine, RiOrganizationChart } from 'react-icons/ri';
import { MdOutlinePeopleAlt } from 'react-icons/md';

export const VerticalMenuElements = [
    {
        title: "Surveys",
        icon: <BiMessageCheck/>
    },
    {
        title: "Banners",
        icon: <RiFileList2Line/>
    },
    {
        title: "Languages",
        icon: <BiGlobe/>
    },
    {
        title: "Footer",
        icon: <RiLayoutBottomLine/>
    },
    {
        title: "Social Networks",
        icon: <BiShareAlt/>
    },
    {
        title: "Users",
        icon: <MdOutlinePeopleAlt/>
    },
    {
        title: "IA",
        icon: <RiOrganizationChart/>
    },
    {
        title: "Teams",
        icon: <BiCollection style = {{transform: 'rotate(180deg)' }}/>
    },
    {
        title: "News Partners",
        icon: <BiBriefcase/>
    },
]

export default VerticalMenuElements;