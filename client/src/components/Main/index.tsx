import React from 'react';
import styled from 'styled-components';
import BottomBlock from './BottomBlock';
import TopBlock from './TopBlock';

const TopBlank = styled.div`
  height: 10vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function Main() {
  return (
    <MainWrapper>
      <TopBlank />
      <TopBlock />
      <BottomBlock />
    </MainWrapper>
  );
}

export default Main;
