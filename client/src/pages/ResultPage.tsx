import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import TitleBox from '../components/common/TitleBox';
import Result from '../components/Result';

const ResultPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopTitleBox = styled(TitleBox)`
  margin-bottom: 4vh;
`;

function ResultPage() {
  return (
    <ResultPageWrapper>
      <Header />
      <TopTitleBox isSmall />
      <Result />
      <Footer />
    </ResultPageWrapper>
  );
}

export default ResultPage;
