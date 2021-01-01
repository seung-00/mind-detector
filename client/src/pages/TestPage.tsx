import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import TitleBox from '../components/common/TitleBox';
import SideBlock from '../components/SideBlock';
import TestForm from '../components/TestForm/';

const TestPageWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const FormArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

function TestPage() {
  return (
    <TestPageWrapper>
      <SideBlock />
      <FormArea>
        <Header />
        <TestForm />
        <TitleBox />
        <Footer />
      </FormArea>
    </TestPageWrapper>
  );
}

export default TestPage;
