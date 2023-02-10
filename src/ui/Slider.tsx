import { useRef, useEffect } from 'react';
import { RangeContainer } from '../containers/PasswordGenerator/style';
import usePasswordGenerator from '../hooks/usePasswordGenerator';
import { ProgressBar, Range } from './style';

const Slider = ({
  passwordLength,
  handleChangePasswordLength,
}: {
  passwordLength: number;
  handleChangePasswordLength: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { MAX_PASSWORD_LENGTH } = usePasswordGenerator();
  const progressBar = useRef<HTMLDivElement>(null);

  const handleCalculateProgress = () => {
    const passLengthPercentage = (passwordLength / MAX_PASSWORD_LENGTH) * 100;
    const progressPercentage = passLengthPercentage;
    progressBar.current!.style.width = `${progressPercentage}%`;
  };

  useEffect(() => {
    handleCalculateProgress();
  }, [passwordLength]);

  return (
    <RangeContainer>
      <Range
        aria-label={`Current password length is ${passwordLength}`}
        type={'range'}
        min={'0'}
        max={MAX_PASSWORD_LENGTH}
        step={1}
        value={passwordLength}
        onChange={(e) => handleChangePasswordLength(e)}
      />
      <ProgressBar ref={progressBar}></ProgressBar>
    </RangeContainer>
  );
};

export default Slider;
