import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Main from '../components/Main';

const MainPageWrapper = styled.div`
  height: 80vh;
  background: #efefef;
`;

function MainPage() {
  return (
    <>
      <Header />
      <MainPageWrapper>
        <Main />
      </MainPageWrapper>
      <Footer />
    </>
  );
}

export default MainPage;
