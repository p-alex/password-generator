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
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCEDFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890';
  const symbols = '!@#$%^&*';
  const charList: string[] = [];
  if (withLowerCase) charList.push(lowerCase);
  if (withUpperCase) charList.push(upperCase);
  if (withNumbers) charList.push(numbers);
  if (withSymbols) charList.push(symbols);
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
