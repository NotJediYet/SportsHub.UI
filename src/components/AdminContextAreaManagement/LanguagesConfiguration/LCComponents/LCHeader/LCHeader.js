import "./LCHeader.scss"
import {useContext} from "react";
import {Context} from "../../../../ContextProvider/ContextProvider";
import AddLanguageModal from "../AddLanguageModal/AddLanguageModal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LCHeader(){
    const {NewLanguageButtonClicked, setNewLanguageButtonClicked} = useContext(Context);
    const [ modalOpen, setModalOpen ] = useState(false);
    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);
    
    return(
        <>
            <AnimatePresence
                inital={false}
                exitBeforeEnter={true}
            >
                {modalOpen && <AddLanguageModal 
                    modalOpen={modalOpen}
                    handleClose={closeModal}
                    message={"You are about to delete an article"}
                    details={["This article will be deleted from Sports Hub!", <br/>, "Are you sure?"]}
                    actionButtonText={"Delete"}
                    />
                }
            </AnimatePresence>
            <div className={"lc-header"}>
                <p>Languages</p>
                <div className={"lc-header-button"}
                    onClick={() => (modalOpen ? closeModal() : openModal())}>
                    + New Language
                </div>
            </div>
        </>
    )
}