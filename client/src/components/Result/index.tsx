import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { PostTestState } from '../../modules/post-test';
import { respondTo } from '../../styles/mixin';
import CustomButton from '../common/CustomButton';
import Gage from './Gage';
import Hospital from './Hospital';
import blueTexts from '../../constants/blueTexts';

const ResultWrapper = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 60%;
  align-items: center;
  padding: 0rem 5rem;
  ${respondTo.desktop`
    padding: 0rem 10rem
  `}
`;

const ResultForm = styled.div`
  padding: 7rem 5.5em;
  flex: 1;
  display: flex;
  border-radius: 3.1rem;
  background-color: white;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0rem 0.8rem 2.2rem rgba(0, 0, 0, 0.08));
  ${respondTo.desktop`
    font-size: 3.5rem;
  `}
`;

const DiagnosisTitle = styled.h1`
  padding: 2rem 0 5rem 0rem;
  font-weight: bold;
  color: #333333;
  font-size: 2rem;
  letter-spacing: -0.05rem;
  ${respondTo.desktop`
    font-size: 3.8rem;
    padding: 4rem 0 8rem 0rem;
  `}
`;

const DiagnosisBody = styled.div`
  padding: 0 2.8rem;
  margin: 5rem 0rem;
  font-size: 1.5rem;
  line-height: 3.1rem;
  text-align: start;
  letter-spacing: -0.05rem;
  color: #333333;
  ${respondTo.desktop`
    text-align: center;
    font-size: 1.8rem;
    padding: 0 4.5rem;
  `}
`;

const Border = styled.div`
  width: 80%;
  margin: 3rem 0;
  border: 1px solid #efefef;
`;

const BlueWrapper = styled.div`
  min-width: 80%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.9rem;
    text-align: center;
    letter-spacing: -0.05rem;
    color: #cacaca;
  }
`;

const BlueArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${respondTo.desktop`
    flex-direction: row;
  `}
`;

const BlueBox = styled.div`
  flex: 1;
  height: auto;
  padding: 2.5rem 5.1rem;
  margin: 1rem;
  font-weight: 500;
  box-shadow: 0rem 0.4rem 1.4rem rgba(0, 0, 0, 0.1);

  border-radius: 1.6rem;
  font-size: 2rem;
  line-height: 3.3rem;
  text-align: center;
  letter-spacing: -0.05rem;
  color: #333333;
  em {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.main};
  }
`;

function Result() {
  const { loading, success, error }: PostTestState['postStatus'] = useSelector(
    (state: RootState) => state.postTest.postStatus
  );
  const titles = blueTexts.titles;
  const bodies = blueTexts.bodies;

  const level = useSelector((state: RootState) => state.postTest.level);
  const halfLevel = Math.round(level / 2);
  const centers = useSelector((state: RootState) => state.postTest.centers);
  const [hospitalToggle, setHospitalToggle] = useState(false);
  return (
    <>
      {success && (
        <ResultWrapper>
          <ResultForm>
            <DiagnosisTitle>{titles[halfLevel - 1]}</DiagnosisTitle>
            <Gage level={level} />
            {halfLevel && (
              <DiagnosisBody>
                {bodies[halfLevel - 1].split('\n').map((line) => {
                  return (
                    <span>
                      {line}
                      <br />
                    </span>
                  );
                })}
              </DiagnosisBody>
            )}
            {level > 4 && (
              <CustomButton
                onClick={() => {
                  setHospitalToggle(!hospitalToggle);
                }}
              >
                {hospitalToggle ? (
                  <span>심리상담센터 접기</span>
                ) : (
                  <span>심리상담센터 보기</span>
                )}
              </CustomButton>
            )}
            {hospitalToggle && (
              <>
                <Hospital hospitalDatas={centers} />
              </>
            )}
            <Border />
            <BlueWrapper>
              <BlueArea>
                <BlueBox>
                  이번 달,
                  <br />
                  평균 우울지수는
                  <br />
                  <em>높음</em> 입니다.
                </BlueBox>
                <BlueBox>
                  오늘,
                  <br />
                  평균 우울지수는
                  <br />
                  <em>보통</em> 입니다.
                </BlueBox>
              </BlueArea>
              <p>* 마인드 디텍터 사용자의 평균 우울지수입니다.</p>
            </BlueWrapper>
          </ResultForm>
        </ResultWrapper>
      )}
    </>
  );
}

export default Result;
