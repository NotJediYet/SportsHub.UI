import { BsThreeDots, BsFillCaretRightFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AnimatePresence } from "framer-motion"
import { useState } from "react";
import Modal from "../Modal/Modal";
import "./ArticleActionMenu.scss";

export default function ArticleActionMenu() {

    const [modalOpen, setModalOpen] = useState(false);

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
                    message={"You are about to delete an article"}
                    details={["This article will be deleted from Sports Hub!", <br/>, "Are you sure?"]}
                    actionButtonText={"Delete"}
                    />}
            </AnimatePresence>
            <div className="article-action-menu-container">
                <div className="article-action-menu-sign">
                    <IconContext.Provider value={{ size: 22 }}>
                        <BsThreeDots/>
                    </IconContext.Provider>
                </div>
                <ul>
                    <li tabindex="1"><a href='/#'>Unpublish</a></li>
                    <li tabindex="1"><a href='/#' onClick={() => (modalOpen ? closeModal() : openModal())}>Delete</a></li>
                    <li tabindex="1">
                        <a href='/#'>
                            Move
                            <BsFillCaretRightFill />
                        </a>
                        <ul>
                            <li tabindex="1"><a href='/#'>Delete</a></li>
                            <li tabindex="1"><a href='/#'>Delete</a></li>
                            <li tabindex="1"><a href='/#'>Delete</a></li>
                            <li tabindex="1"><a href='/#'>Delete</a></li>
                            <li tabindex="1"><a href='/#'>Delete</a></li>
                            <li tabindex="1"><a href='/#'>Delete</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}