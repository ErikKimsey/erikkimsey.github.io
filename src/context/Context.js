import { createContext, useState } from 'react';

export const Context = createContext();

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [child, setChild] = useState(0);

    const openModal = (c) => {
        console.log(c);

        setChild(c);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setChild(0);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, child, setChild }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;




