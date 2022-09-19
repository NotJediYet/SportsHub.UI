import { useState, useEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";
import "./MultiSelectDropdown.scss";

export default function MultiSelectDropdown({optionName, options, optionKeyToShow, optionKeyToSelect, setOptionsToUpdate}) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [optionsToShow, setOptionsToShow] = useState(options);
    const [selectedOptions, setSelectedOptions] = useState(optionsToShow.filter(option => { return option[optionKeyToSelect] }));
    const [tmpOptions, setTmpOptions] = useState(options);

    useEffect(() => {
        setOptionsToUpdate(tmpOptions)
    }, [tmpOptions, setOptionsToUpdate])

    return (
        <div className="wrapper-dropdown">
            <div className="btn-expand-options" onClick={() => {setIsExpanded(!isExpanded)}}>
                {
                    !selectedOptions.length
                    ? <span>Select {optionName}</span>
                    : <div className="selected-options-wrapper">
                        <AnimatePresence> 
                            {selectedOptions.map((selectedOption) =>
                                <motion.label
                                    key={`${selectedOption[optionKeyToShow]}`}
                                    className="label-selected-option"
                                    initial={{opacity: 0, scale: 0 }}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0 }}
                                    transition={{ duration: "0.15" }} 
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                    }}
                                >
                                    {selectedOption[optionKeyToShow]}
                                    <button
                                        className="btn-deselect-option"
                                        onClick={() => {
                                            setSelectedOptions(selectedOptions => selectedOptions.filter(option => option !== selectedOption));
                                            setTmpOptions(
                                                tmpOptions.map(optionToUpdate =>
                                                    JSON.stringify(optionToUpdate) === JSON.stringify(selectedOption)
                                                    ? {...optionToUpdate, [optionKeyToSelect]: false}
                                                    : optionToUpdate
                                                )
                                            );
                                        }}
                                    >
                                        <IconContext.Provider value={{ size: 16 }}>
                                            <IoClose />
                                        </IconContext.Provider>
                                    </button>
                                </motion.label>
                            )}
                        </AnimatePresence>
                    </div>
                }
                <AiFillCaretDown
                    className="collapse-arrow"
                    style={{
                        transform: isExpanded ? 'rotate(-180deg)' : '',
                        transition: 'transform 0.3s linear'
                    }}
                />
            </div>
            <AnimatePresence>
                {isExpanded && <motion.div
                    className="wrapper-options"
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{ duration: "0.15" }}>
                    <div className="search-option">
                        <input
                            type="text"
                            placeholder={`Search for ${optionName}`}
                            onKeyUp={(event) => {
                                setOptionsToShow(options.filter(option => { return option[optionKeyToShow].toLocaleLowerCase().startsWith(event.target.value.toLocaleLowerCase()); }))
                            }}
                        />
                    </div>
                    <ul>
                        {optionsToShow.map((optionToShow) =>
                            <li key={`${optionToShow[optionKeyToShow]}`}>
                                {optionToShow[optionKeyToShow]}
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes(optionToShow)}
                                    onChange={(e) => {
                                        if (e.target.checked) 
                                        {
                                            setSelectedOptions(selectedOptions => [...selectedOptions, optionToShow]);
                                        }
                                        else
                                        {
                                            setSelectedOptions(selectedOptions => selectedOptions.filter(selectedOption => JSON.stringify(selectedOption) !== JSON.stringify(optionToShow)));
                                        }
                                        
                                        setTmpOptions(
                                            tmpOptions.map(tmpOption =>
                                                JSON.stringify(tmpOption).replace(`"${optionKeyToSelect}":${tmpOption[optionKeyToSelect]}`, `"${optionKeyToSelect}":${optionToShow[optionKeyToSelect]}`) === JSON.stringify(optionToShow)
                                                ? {...tmpOption, [optionKeyToSelect]: e.target.checked}
                                                : tmpOption
                                            )
                                        );
                                    }}
                                />
                            </li>
                        )}
                    </ul>
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}