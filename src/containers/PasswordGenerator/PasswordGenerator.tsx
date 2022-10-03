import React from 'react';
import { MdContentCopy } from 'react-icons/md';
import usePasswordGenerator from '../../hooks/usePasswordGenerator';
import {
  AccentText,
  CharacterLengthContainer,
  Checkbox,
  CopyBtn,
  GenerateBtn,
  InputGroup,
  Label,
  OptionsContainer,
  PasswordOptions,
  Range,
  ResultContainer,
  StrengthContainer,
  StrengthMeter,
  StrengthMeterRectangles,
  StrengthMeterRectanglesContainer,
  StrengthMeterText,
  Text,
  Title,
  Wrapper,
} from './style';

const PasswordGenerator = () => {
  const {
    password,
    passwordLength,
    passwordOptions,
    passwordStrength,
    handleUpdatePasswordOptions,
    handleChangePasswordLength,
    handleGeneratePassword,
    handleCopyToClipboard,
  } = usePasswordGenerator();
  return (
    <Wrapper>
      <Title>Password Generator</Title>

      <ResultContainer>
        <Text id="password">{password}</Text>
        <CopyBtn title="Copy password" onClick={handleCopyToClipboard}>
          <MdContentCopy />
        </CopyBtn>
      </ResultContainer>

      <OptionsContainer>
        <CharacterLengthContainer>
          <Text>Character Length</Text>
          <AccentText>{passwordLength}</AccentText>
        </CharacterLengthContainer>

        <Range
          type={'range'}
          min="1"
          max="20"
          step={1}
          value={passwordLength}
          onChange={(e) => handleChangePasswordLength(e)}
        />

        <PasswordOptions>
          <InputGroup>
            <Checkbox
              type="checkbox"
              name="withLowerCase"
              id="c2"
              checked={passwordOptions['withLowerCase']}
              onChange={(e) => handleUpdatePasswordOptions(e)}
            />
            <Label htmlFor="c2">Include Lowercase Letters</Label>
          </InputGroup>
          <InputGroup>
            <Checkbox
              type="checkbox"
              id="c1"
              name="withUpperCase"
              checked={passwordOptions['withUpperCase']}
              onChange={(e) => handleUpdatePasswordOptions(e)}
            />
            <Label htmlFor="c1">Include Uppercase Letters</Label>
          </InputGroup>
          <InputGroup>
            <Checkbox
              type="checkbox"
              id="c3"
              name="withNumbers"
              checked={passwordOptions['withNumbers']}
              onChange={(e) => handleUpdatePasswordOptions(e)}
            />
            <Label htmlFor="c3">Include Numbers</Label>
          </InputGroup>
          <InputGroup>
            <Checkbox
              type="checkbox"
              id="c4"
              name="withSymbols"
              checked={passwordOptions['withSymbols']}
              onChange={(e) => handleUpdatePasswordOptions(e)}
            />
            <Label htmlFor="c4">Include Symbols</Label>
          </InputGroup>
        </PasswordOptions>

        <StrengthContainer>
          <StrengthMeterText>Strength</StrengthMeterText>
          <StrengthMeter>
            <Text>{passwordStrength.strength}</Text>
            <StrengthMeterRectanglesContainer>
              {[0, 1, 2, 3].map((_, index) => {
                return (
                  <StrengthMeterRectangles
                    key={'rectangle' + index}
                    color={passwordStrength.color}
                    active={index <= passwordStrength.score}
                  />
                );
              })}
            </StrengthMeterRectanglesContainer>
          </StrengthMeter>
        </StrengthContainer>
        <GenerateBtn onClick={handleGeneratePassword}>GENERATE</GenerateBtn>
      </OptionsContainer>
    </Wrapper>
  );
};

export default PasswordGenerator;
