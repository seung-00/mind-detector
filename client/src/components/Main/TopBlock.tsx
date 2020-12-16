import React, { useState } from 'react';
import styled from 'styled-components';
import TitleBox from '../common/TitleBox';
import CustomButton from '../common/CustomButton';
import PrivacyBox from './PrivacyBox';

const TopWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 50vh;
  max-height: 300px;
  display: flex;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftConetent = styled.em`
  width: auto;
  padding-right: 70px;
  flex: 0 1 auto;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  color: #333333;
  letter-spacing: -0.5px;
`;

const Description = styled.p`
  width: auto;
  font-weight: 600;
  font-size: 15px;
  line-height: 29px;
  letter-spacing: -0.5px;
  color: #444444;
`;

const TitleArea = styled.div`
  display: flex;
  flex: 0 0 235px;
  padding-left: 10vw;
`;

const ContentArea = styled.div`
  display: flex;
  margin-left: auto;
  padding-right: 10vw;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
`;

const MainButton = styled(CustomButton)`
  margin-top: 22px;
  p + & {
    margin-top: 50px;
  }
`;

function TopBlock() {
  const [startToggle, setStartToggle] = useState(false);
  return (
    <TopWrapper>
      <TitleArea>
        <TitleBox />
      </TitleArea>
      <ContentWrapper>
        {startToggle ? (
          <>
            <PrivacyBox />
            <MainButton
              onClick={() => {
                setStartToggle(false);
              }}
            >
              다음
            </MainButton>
          </>
        ) : (
          <>
            <ContentArea>
              <LeftConetent>
                우리 마음에도
                <br />
                방역이 필요하다는 사실,
                <br />
                알고 계셨나요?
              </LeftConetent>
              <RightContent>
                <Description>
                  마인드 디텍터는 여러분의 진실된 답변을 토대로 <br />
                  마음을 읽어주는 웹어플리케이션입니다. <br />
                  텍스트 데이터와 공공 데이터를 활용해 우울감의 정도를 측정하고,{' '}
                  <br />
                  그에 맞춘 마음 방역을 제안합니다.
                </Description>
                <MainButton
                  hoverShadow={true}
                  onClick={() => {
                    setStartToggle(true);
                  }}
                >
                  시작하기
                </MainButton>
              </RightContent>
            </ContentArea>
          </>
        )}
      </ContentWrapper>
    </TopWrapper>
  );
}

export default TopBlock;
