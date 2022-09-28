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
import FailureToast from "../Toasts/FailureToast/FailureToast";
import { toast } from "react-hot-toast";

export default function ArticleActionMenu({article}) {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ articleService, setArticleService ] = useState(null);
    const { getAccessTokenSilently } = useAuth0();
    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);
    const deleteArticle = () => {
        articleService.delete(article.id)
        .then(
            (res) => toast.custom(
                (t) => <SuccessToast
                    t={t}
                    message="Deleted!"
                    details={"The article is successfully deleted."}
                />
            )
        )
        .catch((error) =>
            toast.custom(
                (t) => <FailureToast
                    t={t}
                    handleRetry={deleteArticle}
                />
            )
        );
    }
    
    React.useEffect(() => {
        (async () => {
            getAccessTokenSilently().then(token => 
                setArticleService(new ArticleService(token))
            );
        })();
    }, [getAccessTokenSilently]);
    
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
                    handleAction={deleteArticle}
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
                    <li tabIndex="1"><label>Unpublish</label></li>
                    <li tabIndex="1"><label onClick={() => (modalOpen ? closeModal() : openModal())}>Delete</label></li>
                    <li tabIndex="1">
                        <label>
                            Move
                            <BsFillCaretRightFill />
                        </label>
                        <ul>
                            <li tabindex="1"><label>NFL</label></li>
                            <li tabindex="1"><label>MLB</label></li>
                            <li tabindex="1"><label>NHL</label></li>
                            <li tabindex="1"><label>CBB</label></li>
                            <li tabindex="1"><label>CFB</label></li>
                            <li tabindex="1"><label>NASCAR</label></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}