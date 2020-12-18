import React from 'react';
import styled from 'styled-components';
import SideBlock from '../components/SideBlock';
import TestFormContainer from '../components/TestForm/TestFormContainer';

const TestPageWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

function TestPage() {
  return (
    <TestPageWrapper>
      <SideBlock />
      <TestFormContainer />
    </TestPageWrapper>
  );
}

export default TestPage;
