import "./AddLanguageModal.scss";
import { motion } from "framer-motion";
import Backdrop from "../../../../Backdrop/Backdrop";
import MultiSelectDropdown from "../MultiSelectDropdown/MultiSelectDropdown";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../../../ContextProvider/ContextProvider";
import LanguageService from "../../../../../services/Languages/LanguageService";
import FailureToast from "../../../../Toasts/FailureToast/FailureToast";
import SuccessToast from "../../../../Toasts/SuccessToast/SuccessToast";
import { toast } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";

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

export default function AddLanguageModal({ handleClose }) {
    const { getAccessTokenSilently } = useAuth0();
    const [ languageService, setLanguageService ] = useState({});
    const { languages, setLanguages } = useContext(Context);
    const [ languagesToUpdate, setLanguagesToUpdate ] = useState([]);

    useEffect(() => {
        (async () => {
            getAccessTokenSilently()
            .then(token => {
                const languageService = new LanguageService(token);
                setLanguageService(languageService);
            });
        })();
    }, [getAccessTokenSilently]);

    const updateLanguages = () => {
        languagesToUpdate.forEach(languageToUpdate => {
            if (!Array.from(languages).includes(languageToUpdate)) {
                if (!languageToUpdate.isAdded && !languageToUpdate.isHidden) {
                    languageToUpdate.isHidden = true;
                } 
                languageService.put(languageToUpdate)
                .then(
                    (res) => {
                        languageToUpdate.isAdded ?
                        toast.custom((t) =>
                            <SuccessToast
                                t={t}
                                message="Language successfully added!"
                                details="You have successfully added a new language to the Sports Hub web site!"
                            />
                        ) :
                        toast.custom((t) =>
                            <SuccessToast
                                t={t}
                                message="Deleted!"
                                details="The language is successfully deleted."
                            />
                        )
                    }
                )
                .catch((error) =>
                    toast.custom(
                        (t) => <FailureToast
                            t={t}
                            handleRetry={updateLanguages}
                        />
                    )
                );
            }
        });
        setLanguages(languagesToUpdate);
    }

    return (
        <Backdrop onClick={handleClose}>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
                    <div className="modal-header">
                        <h2>Add language</h2>
                    </div>
                    <div className="modal-select-area">
                        <p>Select language</p>
                        <MultiSelectDropdown
                            options={languages}
                            optionName="language"
                            optionKeyToShow="name"
                            optionKeyToSelect="isAdded"
                            optionKeyToDisable="isDefault"
                            setOptionsToUpdate={optionsToUpdate => {setLanguagesToUpdate(optionsToUpdate)}}
                        />
                    </div>
                    <div className="modal-action-menu">
                        <button
                            className="btn-cancel"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn-action"
                            onClick={(e) => {
                                e.stopPropagation();
                                updateLanguages();
                                handleClose();
                            }}
                        >
                            Add
                        </button>
                    </div>
                </motion.div>
        </Backdrop>
    );
};