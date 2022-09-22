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
                        <td colspan="2">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {languages.map((language, index) =>
                        <tr>
                            <td>
                                <div className="language-cell">
                                    {language.name}
                                </div>
                            </td>
                            <td>
                                <div className="switch-container">
                                    <Switch
                                        checked={language.isShown}
                                        disabled={language.isDefault}
                                        handleChange={(e) => {
                                            setLanguages(
                                                languages.map(languageToUpdate =>
                                                    JSON.stringify(languageToUpdate) === JSON.stringify(language)
                                                    ? {...languageToUpdate, isShown: !languageToUpdate.isShown}
                                                    : languageToUpdate
                                                )
                                            );
                                        }}/>
                                    {language.isShown ? <text>Show</text> : <text>Hide</text>}
                                </div>
                            </td>
                            <td>
                                {!language.isDefault && 
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