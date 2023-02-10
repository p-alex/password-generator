import React, { useEffect, useState } from 'react';
import { IPasswordGeneratorInput, passwordGenerator } from '../utils/passwordGenerator';

const MAX_PASSWORD_LENGTH = 64;

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
    strength: 'VERY BAD' | 'BAD' | 'GOOD' | 'GREAT';
    color: string;
  }>({
    strength: 'VERY BAD',
    color: '',
  });

  const [areOptionsActive, setAreOptionsActive] = useState(false);

  const checkIfAtLeastOneOptionIsActive = () => {
    return (
      passwordOptions.withLowerCase ||
      passwordOptions.withUpperCase ||
      passwordOptions.withNumbers ||
      passwordOptions.withSymbols
    );
  };

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
    let score = 0;

    if (passwordLength >= 16) {
      score += 50;
    } else if (passwordLength >= 12 && passwordLength < 16) {
      score += 37.5;
    } else if (passwordLength >= 8 && passwordLength < 12) {
      score += 25;
    } else if (passwordLength < 8) {
      score += 12.5;
    }

    if (passwordOptions.withLowerCase) score += 12.5;
    if (passwordOptions.withUpperCase) score += 12.5;
    if (passwordOptions.withNumbers) score += 12.5;
    if (passwordOptions.withSymbols) score += 12.5;

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

  useEffect(() => {
    handleGeneratePassword();
    calculatePasswordStrength();
    setAreOptionsActive(checkIfAtLeastOneOptionIsActive());
  }, [passwordOptions, passwordLength]);

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
