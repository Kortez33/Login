import { useState } from 'react';

export const useLogin = () => {
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
        alert('fasza');

      } else {
        setError('NEM FASZA');
      }
      setIsLoading(false);
    }, 1000); 
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    isLoading,
    handleLogin
  };
};