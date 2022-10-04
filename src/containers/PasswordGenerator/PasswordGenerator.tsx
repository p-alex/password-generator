import React from 'react';
import { MdContentCopy } from 'react-icons/md';
import { BiRightArrowAlt } from 'react-icons/bi';
import usePasswordGenerator from '../../hooks/usePasswordGenerator';
import Slider from '../../ui/Slider';
import {
  CharacterLengthContainer,
  Checkbox,
  CopyBtn,
  GenerateBtn,
  InputGroup,
  Label,
  OptionsContainer,
  PasswordLength,
  PasswordOptions,
  PasswordPlaceholder,
  PasswordText,
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
    passwordScore,
    handleUpdatePasswordOptions,
    handleChangePasswordLength,
    handleGeneratePassword,
    handleCopyToClipboard,
    areOptionsActive,
  } = usePasswordGenerator();
  return (
    <Wrapper>
      <Title>Password Generator</Title>

      <ResultContainer>
        {passwordLength !== 0 && areOptionsActive && (
          <PasswordText id="password">{password}</PasswordText>
        )}
        {(passwordLength === 0 || areOptionsActive === false) && (
          <PasswordPlaceholder>sXAjFuGH</PasswordPlaceholder>
        )}
        <CopyBtn title="Copy password" onClick={handleCopyToClipboard}>
          <MdContentCopy />
        </CopyBtn>
      </ResultContainer>

      <OptionsContainer>
        <CharacterLengthContainer>
          <Text>Character Length</Text>
          <PasswordLength>{passwordLength}</PasswordLength>
        </CharacterLengthContainer>

        <Slider
          passwordLength={passwordLength}
          handleChangePasswordLength={handleChangePasswordLength}
        />

        <PasswordOptions>
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
            {passwordLength !== 0 && areOptionsActive && (
              <Text>{passwordStrength.strength}</Text>
            )}
            <StrengthMeterRectanglesContainer>
              {[0, 75, 87.5, 100].map((score) => {
                return (
                  <StrengthMeterRectangles
                    key={'rectangle' + score}
                    color={passwordStrength.color}
                    active={
                      score <= passwordScore && passwordLength !== 0 && areOptionsActive
                    }
                  />
                );
              })}
            </StrengthMeterRectanglesContainer>
          </StrengthMeter>
        </StrengthContainer>
        <GenerateBtn onClick={handleGeneratePassword}>
          GENERATE <BiRightArrowAlt />
        </GenerateBtn>
      </OptionsContainer>
    </Wrapper>
  );
};

export default PasswordGenerator;
