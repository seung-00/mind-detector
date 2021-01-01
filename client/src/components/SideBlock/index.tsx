import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { respondTo } from '../../styles/mixin';
import TitleBox from '../common/TitleBox';
import Manual from './Manual';

const SideWrapper = styled.div`
  display: none;
  ${respondTo.desktop`    
    display: flex;
    width: 33vw;
    height: inherit;
    background-color: #eeeeee;
    box-shadow: 0rem 0.4rem 2.3rem rgba(0, 0, 0, 0.09);
    justify-content: center;
  `}
`;

const SmallTitleBox = styled(TitleBox)`
  margin-top: 8vh;
`;

const ManualTitle = styled.p`
  margin-top: 4vh;
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: -0.05rem;
  /* color: gray; */
  color: ${({ manualToggle }: { manualToggle: boolean }) =>
    manualToggle ? '#444444' : '#cacaca'};
  cursor: pointer;
`;

const ManualArea = styled.div`
  flex: 0 0 15.6rem;
  display: flex;
  flex-direction: column;
`;

function SideBlock() {
  const [manualToggle, setManualToggle] = useState(false);
  return (
    <SideWrapper>
      <ManualArea>
        <SmallTitleBox isSmall />
        <ManualTitle
          manualToggle={manualToggle}
          onClick={() => {
            setManualToggle(!manualToggle);
          }}
        >
          마인드 디텍터 사용법
        </ManualTitle>
        {manualToggle && <Manual />}
      </ManualArea>
    </SideWrapper>
  );
}

export default SideBlock;
