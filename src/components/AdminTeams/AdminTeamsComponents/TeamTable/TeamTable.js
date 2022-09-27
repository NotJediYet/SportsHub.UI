import React from "react";
import "./TeamTable.scss";
import { useState, useEffect } from "react"
import {FaFilter} from 'react-icons/fa';
import DropDown from "../DropDown/DropDown";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {FaTrash} from "react-icons/fa"

export default function TeamTable({setIsShownImage, setIsFilePicked, setFile, setImage, teamService, setSelectedTeamId, setTeamsButtonText, teamsButtonText, fullTeamInfo, setSelectedTeamName, setSelectedLocation, setSelectedSubCategory, setSelectedCategory}){
    const [idOfHoveredElement, setIdOfHoveredElement] = useState();
    function renderTeams(teams) {
        let newTeams;
        if (selectedShowingNumber.name==="all")
            newTeams = teams.slice(0, teams.length);
            else
                newTeams = teams.slice((selectedPageNumber-1)*selectedShowingNumber.name, selectedPageNumber*selectedShowingNumber.name);

        return(
            newTeams &&
            newTeams.map((item) =>
                <tr onMouseLeave={() => setIdOfHoveredElement(null)} onMouseOver={() => setIdOfHoveredElement(item.id)} onDoubleClick={() => handleOnEditInformationChange(item)} key={item.id} className={"table-item"}>
                    <td>{item.name}</td>
                    <td>{item.location}</td>
                    <td>{item.date}</td>
                    <td>{item.category.name}</td>
                    <td>{item.subcategory.name}</td>
                    <td style={{display: idOfHoveredElement === item.id ? "flex" : "none"}} onClick={() => handleOnEditInformationChange(item)}>Edit</td>
                    <td style={{display: idOfHoveredElement === item.id ? "flex" : "none"}}><FaTrash/></td>
                </tr>
            )
        )
    }

    function handleOnEditInformationChange(item) {
        setImage(null);
        setIsFilePicked(false);
        setIsShownImage(false);
        if (item.teamLogo){
            setImage(`data:teamLogo/${item.teamLogo.fileExtension.slice(1)};base64,${item.teamLogo.bytes}`);
            setIsFilePicked(true);
            setIsShownImage(true);
        }
        setTeamsButtonText("Save");
        setSelectedTeamId(item.id);
        setFile(item.teamLogo);
        setSelectedTeamName(item.name);
        setSelectedCategory(item.category);
        setSelectedLocation(item.location);
        setSelectedSubCategory(item.subcategory);
    }

    function RenderPageNumbers() {
        let pageNumbers = [];
        for (let i=0; i<numberOfPages; i++){
            pageNumbers.push(i+1);
        }
        return(
            pageNumbers.map((item) =>
            <p key={item} style={{opacity: item === selectedPageNumber ? "1" : "0.5"}} onClick={() => setSelectedPageNumber(item)}>{item}</p>
            )
        )
    }

    const values = [{id:"1", name:5},{id:"2", name:10},{id:"3", name:50}, {id:"4", name:"all"}];
    const [selectedShowingNumber, setSelectedShowingNumber] = useState(values[0]);
    const [selectedPageNumber, setSelectedPageNumber] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState();
    useEffect(() => {
        if (fullTeamInfo)
            setNumberOfPages(Math.ceil(fullTeamInfo.length/selectedShowingNumber.name));
    }, [fullTeamInfo, selectedShowingNumber]);

    useEffect(() => {
        setSelectedPageNumber(1);
    }, [selectedShowingNumber]);

    return(
        <div style={{display: teamsButtonText === "Add to list" ? "none" : "flex"}} className={"admin-teams-table"}>
            <table>
                <thead>
                    <tr className={"table-head"}>
                        <td><p>TEAMS</p><FaFilter/></td>
                        <td><p>LOCATION</p><FaFilter/></td>
                        <td><p>DATE ADDED</p></td>
                        <td><p>CATEGORY</p></td>
                        <td><p>SUBCATEGORY</p></td>
                    </tr>
                </thead>
                <tbody>
                    {fullTeamInfo && renderTeams(fullTeamInfo)}
                <tr className={"navigation"}>
                    <td className={"page-switch"}>
                        <div onClick={() => {if (selectedPageNumber!==1)setSelectedPageNumber(selectedPageNumber-1)}}><BsChevronLeft/></div>
                        <RenderPageNumbers/>
                        <div onClick={() => {if (selectedPageNumber!==numberOfPages)setSelectedPageNumber(selectedPageNumber+1)}}><BsChevronRight/></div>
                    </td>
                    <td className={"results-per-page"}><p>Result per page</p><DropDown values={values} selected={selectedShowingNumber} setSelected={setSelectedShowingNumber}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}