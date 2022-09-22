import { motion } from "framer-motion";
import Backdrop from "../../../../Backdrop/Backdrop";
import "./AddLanguageModal.scss";
import MultiSelectDropdown from "../MultiSelectDropdown/MultiSelectDropdown";
import { useState, useContext } from "react";
import { Context } from "../../../../ContextProvider/ContextProvider";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
};

export default function AddLanguageModal({ handleClose }) {
    const { languages, setLanguages } = useContext(Context);
    const [ updatedLanguages, setUpdatedLanguages ] = useState([]);

    return (
        <Backdrop onClick={handleClose}>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
                    <div className="modal-header">
                        <h2>Add language</h2>
                    </div>
                    <div className="modal-select-area">
                        <p>Select language</p>
                        <MultiSelectDropdown
                            options={languages}
                            optionName="language"
                            optionKeyToShow="name"
                            optionKeyToSelect="isAdded"
                            optionKeyToDisable="isDefault"
                            setOptionsToUpdate={updatedLanguages => {setUpdatedLanguages(updatedLanguages)}}
                        />
                    </div>
                    <div className="modal-action-menu">
                        <button
                            className="btn-cancel"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn-action"
                            onClick={ (e) => {
                                e.stopPropagation();
                                setLanguages(updatedLanguages);
                                handleClose();
                            }}
                        >
                            Add
                        </button>
                    </div>
                </motion.div>
        </Backdrop>
    );
};