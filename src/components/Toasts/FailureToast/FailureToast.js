import { AiFillWarning } from  "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { CgRedo } from "react-icons/cg";
import { IconContext } from "react-icons";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import "./FailureToast.scss";
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

export default function FailureToast({ t, handleRetry }) {
    return (
        <motion.div
            className="toast-container"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="failure-toast-sign">
                <IconContext.Provider value={{ size: 22 }}>
                    <AiFillWarning />
                </IconContext.Provider>
            </div>
            <div className="toast-message">
                <h4>Something went wrong!</h4>
                <p>Please try again later</p>
            </div>
            <button className="toast-close" onClick={() => toast.dismiss(t.id)}>
                <IconContext.Provider value={{ size: 18 }}>
                    <IoClose />
                </IconContext.Provider>
            </button>
            <button className="failure-toast-retry" onClick={handleRetry}>
                <p>Retry</p>
                <IconContext.Provider value={{ size: 18 }}>
                    <CgRedo style={{transform: 'scaleX(-1)'}} />
                </IconContext.Provider>
            </button>
        </motion.div>
    );
};