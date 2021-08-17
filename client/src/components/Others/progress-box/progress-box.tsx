import React from 'react';
import {
    CheckMarkWrapper,
    ProgressBar,
    ProgressBarWrapper,
    ProgressStep,
    StatusBox,
    StatusDetails,
    StatusTitle,
} from './progress-box.style';
import {CheckMark} from '@/assets/icons/CheckMark';

type ProgressProps = {
  data?: any;
  status?: any;
};

const ProgressBox: React.FC<ProgressProps> = ({ status, data }) => {
  return (
    <>
      {data.map((item, index) => (
        <ProgressStep key={index}>
          <ProgressBarWrapper className={status >= index + 1 ? 'checked' : ''}>
            <StatusBox>
              {status >= index + 1 ? (
                <CheckMarkWrapper>
                  <CheckMark />
                </CheckMarkWrapper>
              ) : (
                index + 1
              )}
            </StatusBox>
            <ProgressBar />
          </ProgressBarWrapper>
          <StatusDetails>
            {item ? <StatusTitle>{item}</StatusTitle> : ''}
          </StatusDetails>
        </ProgressStep>
      ))}
    </>
  );
};

export default ProgressBox;
