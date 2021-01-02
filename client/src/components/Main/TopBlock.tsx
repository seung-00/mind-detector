import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import TitleBox from '../common/TitleBox';
import CustomButton from '../common/CustomButton';
import PrivacyBox from './PrivacyBox';
import { initializeForm, savePrivacy } from '../../modules/test';
import { useDispatch } from 'react-redux';
import { respondTo } from '../../styles/mixin';

const TopWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${respondTo.desktop`
    align-items: flex-start;
    flex-direction: row;
  `}
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LeftConetent = styled.em`
  width: auto;
  flex: 0 1 auto;
  font-size: 2rem;
  color: #333333;
  letter-spacing: -0.05rem;
  padding: 5vh 5vh;
  line-height: 19px;
  font-weight: 700;
  ${respondTo.desktop`
    padding: 0rem 7rem 0rem 0rem;
    line-height: 2.9rem;
    font-weight: 600;
  `}
`;

const Description = styled.p`
  width: auto;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.9rem;
  letter-spacing: -0.05rem;
  color: #444444;

  ${respondTo.desktop`
    padding: 0rem;
  `}
`;

const TitleArea = styled.div`
  display: flex;
  margin: 3vh 3vh;

  ${respondTo.desktop`
    margin: -2rem 0rem 0rem 10rem;
    flex: 0 0 23.5rem;
  `}
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${respondTo.desktop`
    text-align: start;
    flex-direction: row;
    padding-right: 10vw;
    margin-left: auto;
  `};
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${respondTo.desktop`
    align-items: flex-start;
    width: 44rem;
  `};
`;

const MainButton = styled(CustomButton)`
  /* display: inline-block;
  height: 3.2rem;
  background: white;
  ${respondTo.desktop`
    p + & {
    margin-top: 5rem;
  }
  `}; */
  margin-top: 2.2rem;
  p + & {
    margin-top: 7vh;
  }
`;

function TopBlock() {
  const history = useHistory();
  const [startToggle, setStartToggle] = useState(false);
  const dispatch = useDispatch();
  const [privacy, setPrivacy] = useState({
    age: '선택',
    sex: '선택',
    job: '선택',
    province: '선택',
    city: '선택',
  });

  const handleForm = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const key = e.target.name;
    let value = '';
    if (e.target.name === 'age') {
      value = e.target.value.replace('대', '');
    } else {
      value = e.target.value;
    }
    setPrivacy({
      ...privacy,
      [key]: value,
    });
  };

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  return (
    <TopWrapper>
      <TitleArea>
        <TitleBox />
      </TitleArea>
      <ContentWrapper>
        {startToggle ? (
          <>
            <PrivacyBox handleForm={handleForm} />
            <MainButton
              onClick={() => {
                if (Object.values(privacy).includes('선택')) {
                  alert('분석을 위해 개인정보 기입을 부탁드립니다.');
                } else {
                  dispatch(savePrivacy(privacy));
                  history.push('/test');
                }
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
