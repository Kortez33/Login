import { useState } from 'react';

export const useRegister = (onSuccess) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('A jelszavak nem egyeznek!');
            return;
        }

        if (!username || !password) {
            setError('Minden mező kitöltése kötelező!');
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            if (onSuccess) onSuccess();
        }, 1000);
    };

    return {
        username, setUsername,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        error, isLoading, handleRegister
    };
};