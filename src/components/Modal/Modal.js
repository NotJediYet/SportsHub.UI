import { motion } from "framer-motion"
import { IconContext } from "react-icons";
import { FaTrash } from "react-icons/fa";
import Backdrop from "../Backdrop/Backdrop"
import "./Modal.scss"

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

export default function Modal({ handleAction, handleClose, message, details }) {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="modal-action-sign">
                    <IconContext.Provider value={{ size: 28 }}>
                        <FaTrash />
                    </IconContext.Provider>
                </div>
                <div className="modal-message">
                    <h4>You are about to delete an article</h4>
                    <p>
                        This article will be deleted from Sports Hub!
                        <br/>
                        Are you sure?
                    </p>
                </div>
                <div className="modal-action-menu">
                    <button className="btn-cancel" onClick={handleClose}>Cancel</button>
                    <button className="btn-action" onClick={handleAction}>Delete</button>
                </div>
            </motion.div>
        </Backdrop>
    );
};