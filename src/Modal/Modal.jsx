import React, { useContext } from 'react';
import './modal.scss';
import Background from '../Background/Background';
import ModalContext from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ children }) => {

    const { isModalOpen, closeModal } = useContext(ModalContext);

    const handleCloseFromBackdrop = (e) => {
        closeModal();
    }

    return (
        <>
            {isModalOpen && <div className={"modal-container"} style={{ display: isModalOpen ? "flex" : "none" }}>
                {isModalOpen === true && (
                    <div className="modal-backdrop" onClick={(e) => handleCloseFromBackdrop(e)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button onClick={closeModal}
                                className="close-modal-btn">
                                <FontAwesomeIcon icon={faXmark} size="3x" />
                            </button>
                            {children}
                        </div>
                    </div>
                )
                }
                <Background />
            </div >
            }
        </>
    );
};

export default Modal;
