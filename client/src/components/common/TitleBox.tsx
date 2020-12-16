import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 78px;
  line-height: 92.5px;
  letter-spacing: -1.5;
  color: ${(props) => props.theme.main};
`;

function TitleBox() {
  return (
    <TitleWrapper>
      마인드
      <br />
      디텍터
    </TitleWrapper>
  );
}

export default TitleBox;
