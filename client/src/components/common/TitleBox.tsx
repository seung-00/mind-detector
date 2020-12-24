import React from 'react';
import styled, { css } from 'styled-components';

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 8rem;
  line-height: 9rem;
  letter-spacing: -0.15rem;
  ${(props: any) =>
    props.isSmall &&
    css`
      font-size: 4rem;
      line-height: 5rem;
    `}

  color: ${(props) => props.theme.main};
`;

function TitleBox({ isSmall, ...rest }: any) {
  return (
    <TitleWrapper isSmall={isSmall} {...rest}>
      마인드
      <br />
      디텍터
    </TitleWrapper>
  );
}

export default TitleBox;
