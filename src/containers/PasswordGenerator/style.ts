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
`;

export const Text = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

export const AccentText = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
`;

export const CopyBtn = styled.button`
  color: ${(props) => props.theme.textColor};
`;

export const OptionsContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.containerBg};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CharacterLengthContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Range = styled.input`
  margin-top: 10px;
  width: 100%;
`;

export const PasswordOptions = styled.div``;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input``;

export const Label = styled.label`
  color: ${(props) => props.theme.textColor};
`;

export const StrengthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.sectionBg};
  padding: 10px;
`;

export const StrengthMeterText = styled.p`
  color: ${(props) => props.theme.mutedTextColor};
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
  width: 10px;
  height: 25px;
  border: solid ${(props) => (props.active ? props.color : props.theme.borderColor)} 2px;
  background-color: ${(props) => (props.active ? props.color : 'transparent')};
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

export const GenerateBtn = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.darkTextColor};
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
`;
