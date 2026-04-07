import { useState } from 'react';
import type { FormEvent } from 'react';

export const useLogin = (onSuccess: () => void) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (username === 'admin' && password === 'FreeWork4All') {
        if (onSuccess) onSuccess();
      } else {
        setError('Rossz adatok');
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