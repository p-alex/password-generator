import styled from 'styled-components';

export const Range = styled.input`
  margin-top: 10px;
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.rangeTrackBg};
  height: 5px;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    appearance: none;
    position: relative;
    z-index: 8;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: solid transparent 2px;
    cursor: pointer;
    &:active {
      background-color: ${(props) => props.theme.rangeThumbBgActive};
      border: solid ${(props) => props.theme.accentColor} 2px;
    }
  }
  &::-moz-range-thumb {
    appearance: none;
    position: relative;
    z-index: 8;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: solid transparent 2px;
    cursor: pointer;
    &:active {
      background-color: ${(props) => props.theme.rangeThumbBgActive};
      border: solid ${(props) => props.theme.accentColor} 2px;
    }
  }
  &::-ms-thumb {
    appearance: none;
    position: relative;
    z-index: 8;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: solid transparent 2px;
    cursor: pointer;
    &:active {
      background-color: ${(props) => props.theme.rangeThumbBgActive};
      border: solid ${(props) => props.theme.accentColor} 2px;
    }
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  height: 5px;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.accentColor};
  width: 100%;
  z-index: 4;
  border-top-right-radius: 500px;
  border-bottom-right-radius: 500px;
`;
