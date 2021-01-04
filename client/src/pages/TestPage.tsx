import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import TitleBox from '../components/common/TitleBox';
import SideBlock from '../components/SideBlock';
import TestForm from '../components/TestForm/';
import { respondTo } from '../styles/mixin';

const TestPageWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const FormArea = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const TestTitle = styled(TitleBox)`
  display: inline;
  ${respondTo.desktop`
    display: none;
  `}
`;

function TestPage() {
  return (
    <TestPageWrapper>
      <SideBlock />
      <FormArea>
        <Header />
        <TestForm />
        <TestTitle />
        <Footer />
      </FormArea>
    </TestPageWrapper>
  );
}

export default TestPage;
