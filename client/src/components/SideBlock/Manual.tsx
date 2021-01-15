import React from 'react';
import styled, { keyframes } from 'styled-components';

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ManualWrapper = styled.p`
  margin-top: 1.5vh;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2.2rem;
  letter-spacing: -0.05rem;
  animation: ${boxFade} 1s linear alternate;
`;

function Manual() {
  return (
    <ManualWrapper>
      질문을 읽고 떠오르는 생각에 집중해주세요. 급하게 답변하실 필요는
      없으나,오래 생각하지 말고 떠오른 생각을 솔직하게 적어주세요. 총 10개의
      문항에 답변해주시면 마인드 디텍터가 사용자님의 답변을 분석, 우울감 정도를
      측정해드립니다.
    </ManualWrapper>
  );
}

export default Manual;
