import { BsThreeDots, BsFillCaretRightFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./ArticleActionMenu.scss";
import { useAuth0 } from "@auth0/auth0-react";
import ArticleService from "../../services/Articles/ArticleService";
import SuccessToast from "../Toasts/SuccessToast/SuccessToast";
import { toast } from "react-hot-toast";

export default function ArticleActionMenu() {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ articleService, setArticleService ] = useState(null);
    const { getAccessTokenSilently } = useAuth0();
    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);
    const succeededDeletionToast = () => toast.custom(
        (t) => <SuccessToast
            t={t}
            message="Deleted!"
            details={"The article is successfully deleted."}
        />
    );
    
    React.useEffect(() => {
        (async () => {
            getAccessTokenSilently().then(token => 
                setArticleService(new ArticleService(token))
            );
        })();
    }, []);

    
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
                    handleAction={() => {
                            articleService.delete("Articles", "d1d85437-d47d-466d-1bb8-08da8b56af83")
                            .then(
                                () => {succeededDeletionToast()}
                            )
                            .catch(error => console.log(error));
                        }}
                    />
                }
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