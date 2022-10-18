export interface IPasswordGeneratorInput {
  withLowerCase: boolean;
  withUpperCase: boolean;
  withNumbers: boolean;
  withSymbols: boolean;
}

export const passwordGenerator = (
  { withLowerCase, withUpperCase, withNumbers, withSymbols }: IPasswordGeneratorInput,
  maxLength: number
) => {
  let password = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '2937438916';
  const symbols = `!?'"$%^&*()[]{}_-+=.,:;@~#<>/\|`;
  const charList: string[] = [];

  if (withLowerCase) {
    const RNG = Math.floor(Math.random() * 2);
    if (RNG === 1) {
      charList.push(letters);
    } else {
      charList.unshift(letters);
    }
  }
  if (withUpperCase) {
    const RNG = Math.floor(Math.random() * 2);
    if (RNG === 1) {
      charList.push(letters.toUpperCase());
    } else {
      charList.unshift(letters.toUpperCase());
    }
  }
  if (withNumbers) {
    const RNG = Math.floor(Math.random() * 2);
    if (RNG === 1) {
      charList.push(numbers);
    } else {
      charList.unshift(numbers);
    }
  }
  if (withSymbols) {
    const RNG = Math.floor(Math.random() * 2);
    if (RNG === 1) {
      charList.push(symbols);
    } else {
      charList.unshift(symbols);
    }
  }
  for (let i = 0; i < maxLength; i++) {
    if (i < charList.length) {
      password += charList[i].charAt(Math.floor(Math.random() * charList[i].length));
    } else {
      const RNG = Math.floor(Math.random() * charList.length);
      password += charList[RNG].charAt(Math.floor(Math.random() * charList[RNG].length));
    }
  }
  return password;
};
