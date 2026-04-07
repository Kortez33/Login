import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { LoginModal } from '../components/LoginModal';
import { RegisterModal } from '../components/RegisterModal';

interface AuthModalContextValue {
    openLogin: () => void;
    openRegister: () => void;
    closeModal: () => void;
}

const AuthModalContext = createContext<AuthModalContextValue | null>(null);

export const useAuthModal = (): AuthModalContextValue => {
    const ctx = useContext(AuthModalContext);
    if (!ctx) throw new Error('useAuthModal must be used within AuthModalProvider');
    return ctx;
};

interface AuthModalProviderProps {
    children: ReactNode;
}

export const AuthModalProvider = ({ children }: AuthModalProviderProps) => {
    const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(null);

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