import { BsCheckLg } from  "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { IconContext } from "react-icons";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import "./SuccessToast.scss";
import "../Toast.scss";

const dropIn = {
    hidden: {
        y: "-15vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1
    },
    exit: {
        y: "15vh",
        opacity: 0
    }
};

export default function SuccessToast({ t, message, details }) {
    return (
        <motion.div className="toast-container"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
        >
            <div className="success-toast-sign">
                <IconContext.Provider value={{ size: 22 }}>
                    <BsCheckLg />
                </IconContext.Provider>
            </div>
            <div className="toast-message">
                <h4>{message}</h4>
                <p>{details}</p>
            </div>
            <button className="toast-close" onClick={() => toast.dismiss(t.id)}>
                <IconContext.Provider value={{ size: 18 }}>
                    <IoClose />
                </IconContext.Provider>
            </button>
        </motion.div>
    );
};