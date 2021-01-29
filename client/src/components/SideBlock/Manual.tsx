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
  font-size: 1.4rem;
  line-height: 2.2rem;
  letter-spacing: -0.1rem;
  animation: ${boxFade} 1s linear alternate;
`;

function Manual() {
  return (
    <ManualWrapper>
      <p>질문을 읽고 떠오르는 생각에 집중해주세요. </p>
      <p>고민하지 마시고 떠오르는 생각을 솔직하게 적어주세요.</p>총 10개의
      문항에 답변해주시면 사용자님의 답변을 분석하여 우울감 정도를
      측정해드립니다.
    </ManualWrapper>
  );
}

export default Manual;
