import "./TableOfLanguages.scss"
import { useState, useEffect, useContext } from "react";
import Modal from "../../../../Modal/Modal"
import { MdDelete } from "react-icons/md"
import { AnimatePresence } from "framer-motion";
import Switch from "./Switch/Switch";
import { FaTrash } from "react-icons/fa";
import { Context } from "../../../../ContextProvider/ContextProvider";
import { useAuth0 } from "@auth0/auth0-react";
import LanguageService from "../../../../../services/Languages/LanguageService";
import FailureToast from "../../../../Toasts/FailureToast/FailureToast";
import SuccessToast from "../../../../Toasts/SuccessToast/SuccessToast";
import { toast } from "react-hot-toast";

export default function TableOfLanguages() { 
    const { getAccessTokenSilently } = useAuth0();
    const [ languageService, setLanguageService ] = useState({});
    const { languages, setLanguages } = useContext(Context);
    const [ languageToDelete, setLanguageToDelete ] = useState({});
    const [ modalOpen, setModalOpen ] = useState(false);
    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);

    useEffect(() => {
        (async () => {
            getAccessTokenSilently()
            .then(token => {
                const languageService = new LanguageService(token);
                setLanguageService(languageService);
            });
        })();
    }, [getAccessTokenSilently]);

    const changeLanguageStatus = (language) => {
        setLanguages(
            languages.map(languageToUpdate => JSON.stringify(languageToUpdate) === JSON.stringify(language)
                ? {...languageToUpdate, isHidden: !languageToUpdate.isHidden}
                : languageToUpdate
            )
        );
        languageService.put({...language, isHidden: !language.isHidden});
    }

    const deleteLanguage = (language) => {
        setLanguages(
            languages.map(languageToUpdate => JSON.stringify(languageToUpdate) === JSON.stringify(language)
                ? {...languageToUpdate, isHidden: true, isAdded: false}
                : languageToUpdate
            )
        );
        languageService.put({...language, isHidden: true, isAdded: false})
        .then(
            (res) => toast.custom(
                (t) => <SuccessToast
                    t={t}
                    message="Deleted!"
                    details="The language is successfully deleted."
                />
            )
        )
        .catch((error) =>
            toast.custom(
                (t) => <FailureToast
                    t={t}
                    handleRetry={deleteLanguage(language)}
                />
            )
        );
    }

    return (
        <div className="table-wrapper">
            <AnimatePresence
                inital={false}
                exitBeforeEnter={true}
            >
                {modalOpen && <Modal
                    modalOpen={modalOpen}
                    handleClose={closeModal} 
                    icon={<FaTrash/>}
                    message={"You are about to delete this language"}
                    details={["This language will be deleted from Sports Hub!", <br key="requiredKey"/>, "Are you sure?"]}
                    actionButtonText={"Delete"}
                    handleAction={(e) => {
                        deleteLanguage(languageToDelete);
                    }}
                />}
            </AnimatePresence>
            <table>
                <thead>
                    <tr>
                        <td>Language</td>
                        <td colSpan="2" onClick={() => console.log(languageService.get())}>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {languages.filter(language => language.isAdded).map((addedLanguage) =>
                        <tr key={addedLanguage.code}>
                            <td>
                                <div className="language-cell">
                                    {addedLanguage.name}
                                </div>
                            </td>
                            <td>
                                <div className="switch-container">
                                    <Switch
                                        checked={!addedLanguage.isHidden}
                                        disabled={addedLanguage.isDefault}
                                        handleChange={(e) => {
                                            changeLanguageStatus(addedLanguage)
                                        }}
                                    />
                                    {addedLanguage.isHidden ? <>Hide</> : <>Show</>}
                                </div>
                            </td>
                            <td>
                                {!addedLanguage.isDefault && 
                                    <button
                                        className="btn-delete"
                                        onClick={() => {
                                            modalOpen ? closeModal() : openModal();
                                            setLanguageToDelete(addedLanguage)
                                        }}
                                    >
                                        <MdDelete/>
                                    </button>
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}