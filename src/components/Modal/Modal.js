import { motion } from "framer-motion"
import { IconContext } from "react-icons";
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

export default function Modal({ handleAction, handleClose, icon, message, details, actionButtonText }) {
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
                        {icon}
                    </IconContext.Provider>
                </div>
                <div className="modal-message">
                    <h4>{message}</h4>
                    <p>{details}</p>
                </div>
                <div className="modal-action-menu">
                    <button className="btn-cancel" onClick={handleClose}>Cancel</button>
                    <button className="btn-action" onClick={handleAction}>{actionButtonText}</button>
                </div>
            </motion.div>
        </Backdrop>
    );
};