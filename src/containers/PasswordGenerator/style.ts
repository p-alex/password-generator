import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: 40px auto;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.mutedTextColor};
  font-size: 1.5rem;
`;

export const ResultContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.containerBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  @media (max-width: 450px) {
    height: 110px;
  }
  @media (max-width: 350px) {
    height: 120px;
  }
  @media (max-width: 270px) {
    height: 150px;
  }
`;

export const PasswordText = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;
  word-wrap: break-word;
  word-break: break-all;
`;

export const PasswordPlaceholder = styled.p`
  color: ${(props) => props.theme.mutedTextColor};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Text = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

export const PasswordLength = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
  font-size: 1.2rem;
`;

export const CopyBtn = styled.button`
  min-width: 30px;
  min-height: 30px;
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-left: 16px;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

export const RangeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const OptionsContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.containerBg};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CharacterLengthContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PasswordOptions = styled.div``;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Checkbox = styled.input`
  accent-color: ${(props) => props.theme.accentColor};
  transform: scale(1.4);
  background-color: red;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.textColor};
`;

export const StrengthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.sectionBg};
  padding: 20px;
`;

export const StrengthMeterText = styled.p`
  color: ${(props) => props.theme.mutedTextColor};
  text-transform: uppercase;
  font-weight: 700;
`;

export const StrengthMeter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StrengthMeterRectanglesContainer = styled.div`
  display: flex;
`;

export const StrengthMeterRectangles = styled.div<{
  color: string;
  active: boolean;
}>`
  width: 9px;
  height: 25px;
  border: solid ${(props) => (props.active ? props.color : props.theme.borderColor)} 2px;
  background-color: ${(props) => (props.active ? props.color : 'transparent')};
  box-shadow: ${(props) => (props.active ? `0 0 5px ${props.color}` : 'none')};
  margin-right: 5px;
  transition: background 100ms ease-in-out;
  &:last-child {
    margin-right: 0;
  }
`;

export const GenerateBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px;
  border: solid transparent 2px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.darkTextColor};
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  transition: border 100ms ease-in-out, background 100ms ease-in-out,
    color 100ms ease-in-out;
  &:hover {
    border: solid ${(props) => props.theme.accentColor} 2px;
    background-color: transparent;
    color: ${(props) => props.theme.accentColor};
  }
`;
