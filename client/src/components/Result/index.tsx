import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { respondTo } from '../../styles/mixin';
import CustomButton from '../common/CustomButton';

import Gage from './Gage';
import Hospital from './Hospital';

const ResultWrapper = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 60%;
  align-items: center;
  padding: 0rem 5rem;
  ${respondTo.desktop`
    padding: 0rem 8rem
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
  padding: 2rem 0 8rem 0rem;
  font-weight: 600;
  color: #333333;
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  ${respondTo.desktop`
    font-size: 3.8rem;
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
    margin-left: auto;
    font-weight: 700;
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
    font-weight: 600;
    color: ${(props) => props.theme.main};
  }
`;

const titles = [
  '비교적 낮은 정도의 우울감입니다.',
  '약간의 우울감을 느끼고 있군요.',
  '비교적 높은 수준의 우울감을 느끼고 있군요.',
  '상당히 높은 수준의 우울감을 느끼고 있군요.',
];

const bodies = [
  '우울감은 언제든 누구에게나 찾아올 수 있습니다.\n 그러므로 자신의 마음을 잘 돌보는 것이 중요합니다. 항상 자신의 마음에 귀를 기울이고 따뜻한 온도를 유지해 주세요.',
  '괜찮습니다. 우리 모두 약간의 불안감을 가지고 살아가고 있으니까요.\n 그러나 자칫 그 무게가 더 무거워지기 전에 가벼운 산책을 떠나 훌훌 털어버리는 건 어떤가요?',
  '마음이 보내는 신호에 집중해주세요.\n 전문가와의 상담은 우울감 해소에 큰 도움이 됩니다. \n 페이지 하단의 "상담센터 정보보기" 버튼을 눌러 주변의 상담센터를 확인해보세요.',
  '전문가와의 상담은 우울감에서 빠르게 벗어나는 데 큰 도움을 줍니다.\n 지금 바로 페이지 하단의 "상담센터 정보보기" 버튼을 눌러 주변의 상담센터를 확인하세요.',
];

function Result() {
  const level = useSelector((state: RootState) => state.postTest.level);
  const halfLevl = Math.round(level / 2);
  const centers = useSelector((state: RootState) => state.postTest.centers);
  const [hospitalToggle, setHospitalToggle] = useState(false);
  return (
    <ResultWrapper>
      <ResultForm>
        <DiagnosisTitle>{titles[halfLevl - 1]}</DiagnosisTitle>
        <Gage level={level} />
        <DiagnosisBody>
          {bodies[halfLevl - 1].split('\n').map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </DiagnosisBody>
        {level > 4 && (
          <CustomButton
            onClick={() => {
              setHospitalToggle(!hospitalToggle);
            }}
          >
            {hospitalToggle ? (
              <span>상담센터 정보 접기</span>
            ) : (
              <span>상담센터 정보 보기</span>
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
  );
}

export default Result;
