import "./TableOfLanguages.scss"
import { MdDelete } from "react-icons/md"
import Modal from "../../../../Modal/Modal"
import { AnimatePresence } from "framer-motion";
import React, { useState, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Context } from "../../../../ContextProvider/ContextProvider";
import Switch from "./Switch/Switch";

export default function TableOfLanguages() { 
    const { languages, setLanguages } = useContext(Context);
    const [ modalOpen, setModalOpen ] = useState(false);
    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);

    return (
        <>
            <AnimatePresence
                inital={false}
                exitBeforeEnter={true}
            >
                {modalOpen && <Modal 
                    modalOpen={modalOpen}
                    handleClose={closeModal} 
                    icon={<FaTrash/>}
                    message={"You are about to delete this language"}
                    details={["This language will be deleted from Sports Hub!", <br/>, "Are you sure?"]}
                    actionButtonText={"Delete"}
                    />
                }
            </AnimatePresence>

            <table>
                <thead>
                    <tr>
                        <td>Language</td>
                        <td colSpan="2">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {languages.filter(language => language.isAdded).map((addedLanguage) =>
                        <tr>
                            <td>
                                <div className="language-cell">
                                    {addedLanguage.name}
                                </div>
                            </td>
                            <td>
                                <div className="switch-container">
                                    <Switch
                                        checked={addedLanguage.isShown}
                                        disabled={addedLanguage.isDefault}
                                        handleChange={(e) => {
                                            setLanguages(
                                                languages.map(languageToUpdate =>
                                                    JSON.stringify(languageToUpdate) === JSON.stringify(addedLanguage)
                                                    ? {...languageToUpdate, isShown: !languageToUpdate.isShown}
                                                    : languageToUpdate
                                                )
                                            );
                                        }}/>
                                    {addedLanguage.isShown ? <text>Show</text> : <text>Hide</text>}
                                </div>
                            </td>
                            <td>
                                {!addedLanguage.isDefault && 
                                    <button className="btn-delete" onClick={() => (modalOpen ? closeModal() : openModal())}>
                                        <MdDelete/>
                                    </button>
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}