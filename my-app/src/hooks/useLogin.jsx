import { useState } from 'react';

export const useLogin = (onSuccess) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (username === 'admin' && password === 'fasz') {
        if (onSuccess) onSuccess();
      } else {
        setError('NEM FASZA');
      }
      setIsLoading(false);
    }, 1000);
  };

  return {
    username, setUsername,
    password, setPassword,
    error, isLoading, handleLogin
  };
};