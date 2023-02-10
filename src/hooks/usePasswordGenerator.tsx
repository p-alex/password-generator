import React, { useEffect, useRef, useState } from 'react';
import { passwordGenerator } from '../utils/passwordGenerator';

const MAX_PASSWORD_LENGTH = 64;

interface PasswordOptions {
  passwordLength: number;
  withLowerCase: boolean;
  withUpperCase: boolean;
  withNumbers: boolean;
  withSymbols: boolean;
}

const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>({
    passwordLength: 8,
    withLowerCase: true,
    withUpperCase: true,
    withNumbers: false,
    withSymbols: false,
  });

  const { passwordLength, withLowerCase, withUpperCase, withNumbers, withSymbols } =
    passwordOptions;

  const [passwordScore, setPasswordScore] = useState(2);

  const [passwordStrength, setPasswordStrength] = useState<{
    strength: 'VERY BAD' | 'BAD' | 'GOOD' | 'GREAT';
    color: string;
  }>({
    strength: 'VERY BAD',
    color: '',
  });

  const [areOptionsActive, setAreOptionsActive] = useState(false);

  const checkIfAtLeastOneOptionIsActive = () => {
    return withLowerCase || withUpperCase || withNumbers || withSymbols;
  };

  const handleGeneratePassword = () => {
    if (!withLowerCase && !withUpperCase && !withNumbers && !withSymbols)
      return setPassword('');
    const password = passwordGenerator(
      { withLowerCase, withUpperCase, withNumbers, withSymbols },
      passwordLength
    );
    setPassword(password);
    calculatePasswordStrength();
  };

  const handleUpdatePasswordOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordOptions((prevState) => {
      const newState = {
        ...prevState,
        [event.target.name]: event.target.checked,
      };
      handleChangeLocalStorage(newState);
      return {
        ...prevState,
        [event.target.name]: event.target.checked,
      };
    });
  };

  const handleChangePasswordLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordOptions((prevState) => {
      const newState = {
        ...prevState,
        passwordLength: parseInt(event.target.value),
      };
      handleChangeLocalStorage(newState);
      return newState;
    });
  };

  const handleCopyToClipboard = () => {
    const password = document.getElementById('password') as HTMLParagraphElement;
    navigator.clipboard.writeText(password.innerText);
  };

  const calculatePasswordStrength = () => {
    let score = 0;

    if (passwordOptions.passwordLength >= 16) {
      score += 50;
    } else if (
      passwordOptions.passwordLength >= 12 &&
      passwordOptions.passwordLength < 16
    ) {
      score += 37.5;
    } else if (
      passwordOptions.passwordLength >= 8 &&
      passwordOptions.passwordLength < 12
    ) {
      score += 25;
    } else if (passwordOptions.passwordLength < 8) {
      score += 12.5;
    }

    if (withLowerCase) score += 12.5;
    if (withUpperCase) score += 12.5;
    if (withNumbers) score += 12.5;
    if (withSymbols) score += 12.5;

    setPasswordScore(score);
    if (score > 87.5) {
      setPasswordStrength((prevState) => ({
        ...prevState,
        strength: 'GREAT',
        color: 'lightgreen',
      }));
      return;
    }
    if (score > 75 && score <= 87.5) {
      setPasswordStrength((prevState) => ({
        ...prevState,
        strength: 'GOOD',
        color: 'yellow',
      }));
      return;
    }
    if (score > 62.5 && score <= 75) {
      setPasswordStrength((prevState) => ({
        ...prevState,
        strength: 'BAD',
        color: 'orange',
      }));
      return;
    }
    if (score <= 62.5) {
      setPasswordStrength((prevState) => ({
        ...prevState,
        strength: 'VERY BAD',
        color: 'red',
      }));
      return;
    }
  };

  const handleChangeLocalStorage = (newState: PasswordOptions) => {
    const options = JSON.stringify(newState);
    window.localStorage.setItem('options', options);
  };

  const handleSetUpLocalStorage = () => {
    const isLocalStorageSetUp = window.localStorage.getItem('options') !== null;
    if (!isLocalStorageSetUp) {
      const options = JSON.stringify(passwordOptions);
      window.localStorage.setItem('options', options);
    }
    const options = JSON.parse(
      window.localStorage.getItem('options')!
    ) as PasswordOptions;
    setPasswordOptions(options);
  };

  const effectCounter = useRef<number>(1);

  useEffect(() => {
    handleGeneratePassword();
    calculatePasswordStrength();
    setAreOptionsActive(checkIfAtLeastOneOptionIsActive());
    return () => {
      effectCounter.current += 1;
    };
  }, [passwordOptions]);

  useEffect(() => {
    handleSetUpLocalStorage();
  }, []);

  return {
    MAX_PASSWORD_LENGTH,
    password,
    passwordLength,
    passwordOptions,
    passwordScore,
    passwordStrength,
    handleGeneratePassword,
    handleUpdatePasswordOptions,
    handleChangePasswordLength,
    handleCopyToClipboard,
    areOptionsActive,
  };
};

export default usePasswordGenerator;
