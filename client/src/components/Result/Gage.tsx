import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../../styles/mixin';

const GageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledProgress = styled.progress`
  width: 80%;
  height: 4.3rem;
  ${respondTo.desktop`
    height: 5.5rem;
  `}
  &::-webkit-progress-bar {
    padding: 1rem;
    border-radius: 25px;
    background-color: #eee;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1),
      inset 1px 2px 3px rgba(0, 0, 0, 0.25);
  }
  &::-webkit-progress-value {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1),
      inset 0px -4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    background-color: ${(props) => props.theme.main};
  }
  &::-moz-progress-bar {
    border-radius: 25px;
    background-color: #eee;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1),
      inset 1px 2px 3px rgba(0, 0, 0, 0.25);
  }
`;

const ProgressTextContainer = styled.ul`
  margin-top: 2rem;
  display: flex;
  width: 88%;
  .item-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Fence = styled.div`
  width: 0rem;
  height: 1.5rem;
  border: 0.5px solid #cacaca;
  margin: 1.2rem 0rem;
  ${respondTo.desktop`
      height: 1.5rem;
  `}
`;

const ProgressTextItem = styled.li`
  display: flex;
  justify-content: flex-end;
  width: 23%;
  font-size: 1.1rem;
  ${respondTo.desktop`
    font-size: 2rem;
  `}
`;

interface GageProps {
  level: number;
}

function Gage({ level }: GageProps) {
  const gageValue = level * 12.5;
  return (
    <GageWrapper>
      <StyledProgress max="100" value={gageValue} />
      <ProgressTextContainer>
        <ProgressTextItem>
          <div className="item-wrapper">
            <Fence />
            <span>보통</span>
          </div>
        </ProgressTextItem>
        <ProgressTextItem>
          <div className="item-wrapper">
            <Fence />
            <span>약간 높음</span>
          </div>
        </ProgressTextItem>
        <ProgressTextItem>
          <div className="item-wrapper">
            <Fence />
            <span>높음</span>
          </div>
        </ProgressTextItem>
        <ProgressTextItem>
          <div className="item-wrapper">
            <Fence />
            <span>매우 높음</span>
          </div>
        </ProgressTextItem>
      </ProgressTextContainer>
    </GageWrapper>
  );
}

export default Gage;
