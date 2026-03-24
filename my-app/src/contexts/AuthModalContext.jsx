import { createContext, useContext, useState } from 'react';
import { LoginModal } from '../components/LoginModal.jsx';
import { RegisterModal } from '../components/RegisterModal';

const AuthModalContext = createContext();

export const useAuthModal = () => useContext(AuthModalContext);

export const AuthModalProvider = ({ children }) => {
    const [activeModal, setActiveModal] = useState(null);

    const openLogin = () => setActiveModal('login');
    const openRegister = () => setActiveModal('register');
    const closeModal = () => setActiveModal(null);

    return (
        <AuthModalContext.Provider value={{ openLogin, openRegister, closeModal }}>
            {children}
            <LoginModal
                open={activeModal === 'login'}
                onClose={closeModal}
                onSwitchToRegister={openRegister}
            />
            <RegisterModal
                open={activeModal === 'register'}
                onClose={closeModal}
                onSwitchToLogin={openLogin}
            />
        </AuthModalContext.Provider>
    );
};