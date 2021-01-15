import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixin';

interface TitleWrapperProps {
  isSmall: boolean;
}

const TitleWrapper = styled.div<TitleWrapperProps>`
  font-weight: bold;
  letter-spacing: -0.15rem;

  // Small
  font-size: 5rem;
  line-height: 6rem;

  ${respondTo.desktop`
    font-size: 8rem;
    line-height: 9.2rem;
  `}

  ${(props: any) =>
    props.isSmall &&
    css`
      font-size: 5rem !important;
      line-height: 6rem !important;
    `}

  color: ${(props) => props.theme.main};
`;

interface TitleBoxProps {
  isSmall: boolean;
}

function TitleBox({
  isSmall,
  ...rest // expected styling
}: TitleBoxProps) {
  return (
    <TitleWrapper isSmall={isSmall} {...rest}>
      마인드
      <br />
      디텍터
    </TitleWrapper>
  );
}

TitleBox.defaultProps = {
  isSmall: false,
};

export default TitleBox;
