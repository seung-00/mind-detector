import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import CustomButton from '../common/CustomButton';

import Gage from './Gage';
import HospitalBox from './HospitalBox';

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  min-height: 114rem;
  margin-bottom: 10vh;
  background-color: white;
  border-radius: 3.1rem;
  filter: drop-shadow(0rem 0.8rem 2.2rem rgba(172, 155, 155, 0.08));
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 7.4rem;
`;

const DiagnosisTitle = styled.h1`
  font-weight: 700;
  color: #333333;
  font-size: 4rem;
  line-height: 2.9rem;
  letter-spacing: -0.05rem;
`;

const DiagnosisBody = styled.div`
  width: 58.6rem;
  height: 9.3rem;
  font-size: 2rem;
  line-height: 3.1rem;
  text-align: center;
  letter-spacing: -0.05rem;
  color: #333333;
  & + button {
    margin-top: 8rem;
  }
`;

const Border = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 60vw;
  margin: 11rem 0 7.2rem 0;
  border: 1px solid #cacaca;
`;

const BlueArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vw;
`;

const BlueBox = styled.div`
  width: 35rem;
  height: 15.5rem;
  padding: 3.2rem 5.1rem;
  font-weight: 500;
  box-shadow: 0rem 0.4rem 1.4rem rgba(0, 0, 0, 0.1);
  border-radius: 1.6rem;
  font-size: 3rem;
  line-height: 5.3rem;
  /* or 177% */
  text-align: center;
  letter-spacing: -0.05rem;
  color: #333333;
  em {
    font-size: 3.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.main};
  }
`;

const BlueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 26.7rem;
  p {
    margin-top: 2rem;
    margin-left: auto;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.9rem;
    /* identical to box height, or 193% */
    text-align: center;
    letter-spacing: -0.05rem;
    color: #cacaca;
  }
`;

const titles = [
  '비교적 낮은 정도의 우울감입니다.',
  '약간의 우울감을 느끼고 있군요.',
  '비교적 높은 수준의 우울감을 느끼고 있군요.',
  '상당히 높은 수준의 우울감을 느끼고 있군요.',
];

const bodies = [
  '우울감은 언제든 누구에게나 찾아올 수 있습니다. 그러므로 자신의 마음을 잘 돌보는 것이 중요합니다. 항상 자신의 마음에 귀를 기울이고 따뜻한 온도를 유지해 주세요.',
  '괜찮습니다. 우리 모두 약간의 불안감을 가지고 살아가고 있으니까요. 그러나 자칫 그 무게가 더 무거워지기 전에 가벼운 산책을 떠나 훌훌 털어버리는 건 어떤가요?',
  '마음이 보내는 신호에 집중해주세요. 전문가와의 상담은 우울감 해소에 큰 도움이 된답니다. 궁금하다면 페이지 하단의 "상담센터 정보보기" 버튼을 눌러 주변의 상담센터를 확인하세요.',
  '전문가와의 상담은 우울감에서 빠르게 벗어나는 데 큰 도움을 줍니다. 지금 바로 페이지 하단의 "상담센터 정보보기" 버튼을 눌러 주변의 상담센터를 확인하세요.',
];

function ResultForm() {
  const level = useSelector((state: RootState) => state.postTest.level);
  const halfLevl = Math.round(level / 2);
  const centers = useSelector((state: RootState) => state.postTest.centers);
  const [hospitalToggle, setHospitalToggle] = useState(false);
  return (
    <FormBox>
      <ContentWrapper>
        <DiagnosisTitle>{titles[halfLevl - 1]}</DiagnosisTitle>
        <Gage level={level} />
        <DiagnosisBody>{bodies[halfLevl - 1]}</DiagnosisBody>
        {level > 5 && (
          <CustomButton
            onClick={() => {
              setHospitalToggle(!hospitalToggle);
            }}
          >
            상담센터 정보보기
          </CustomButton>
        )}
        {hospitalToggle && (
          <>
            <HospitalBox hospitalMock={centers} />
          </>
        )}
        <Border />
        <BlueWrapper>
          <BlueArea>
            <BlueBox>
              이번달,
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
      </ContentWrapper>
    </FormBox>
  );
}

export default ResultForm;
