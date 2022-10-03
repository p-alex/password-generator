import React, { useEffect, useState } from 'react';
import { IPasswordGeneratorInput, passwordGenerator } from '../utils/passwordGenerator';

const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const [passwordLength, setPasswordLength] = useState(8);

  const [passwordOptions, setPasswordOptions] = useState<IPasswordGeneratorInput>({
    withLowerCase: true,
    withUpperCase: true,
    withNumbers: false,
    withSymbols: false,
  });

  const [passwordScore, setPasswordScore] = useState(2);

  const [passwordStrength, setPasswordStrength] = useState<{
    score: number;
    strength: 'WEAK' | 'MEDIUM' | 'STRONG' | 'VERY STRONG';
    color: string;
  }>({
    score: 0,
    strength: 'WEAK',
    color: '',
  });

  const handleGeneratePassword = () => {
    if (
      !passwordOptions.withLowerCase &&
      !passwordOptions.withUpperCase &&
      !passwordOptions.withNumbers &&
      !passwordOptions.withSymbols
    )
      return setPassword('');
    const password = passwordGenerator(passwordOptions, passwordLength);
    setPassword(password);
    calculatePasswordStrength();
  };

  const handleUpdatePasswordOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordOptions((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleChangePasswordLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(parseInt(event.target.value));
  };

  const handleCopyToClipboard = () => {
    const password = document.getElementById('password') as HTMLParagraphElement;
    navigator.clipboard.writeText(password.innerText);
  };

  const calculatePasswordStrength = () => {
    if (passwordLength > 11) {
      setPasswordStrength((prevState) => ({
        ...prevState,
        score: 3,
        strength: 'VERY STRONG',
        color: 'green',
      }));
    } else if (passwordLength >= 8 && passwordLength < 11) {
      setPasswordStrength((prevState) => ({
        ...prevState,
        score: 2,
        strength: 'STRONG',
        color: 'lightgreen',
      }));
    } else if (passwordLength >= 6 && passwordLength < 8) {
      setPasswordStrength((prevState) => ({
        ...prevState,
        score: 1,
        strength: 'MEDIUM',
        color: 'orange',
      }));
    } else if (passwordLength < 6) {
      setPasswordStrength((prevState) => ({
        ...prevState,
        score: 0,
        strength: 'WEAK',
        color: 'red',
      }));
    }
  };

  useEffect(() => {
    handleGeneratePassword();
    calculatePasswordStrength();
  }, [passwordOptions, passwordLength]);

  return {
    password,
    passwordLength,
    passwordOptions,
    passwordScore,
    passwordStrength,
    handleGeneratePassword,
    handleUpdatePasswordOptions,
    handleChangePasswordLength,
    handleCopyToClipboard,
  };
};

export default usePasswordGenerator;
