import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: autod;
  box-sizing: border-box;
  background: transparent;
  padding: 1.2rem 1.9rem;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  line-height: 1.5rem;
  background-color: white;
  border: none;
  border-radius: 7.6rem;
  color: ${(props) => props.theme.main};

  ${(props: any) =>
    props.hoverShadow
      ? css`
          &:hover {
            box-shadow: 0rem 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
            transition: box-shadow;
            transition-duration: 0.4s;
          }
        `
      : css`
          box-shadow: 0rem 0.4rem 1.4rem rgba(0, 0, 0, 0.1);
        `}
  cursor: pointer;
`;

function CustomButton({ hoverShadow, ...rest }: any) {
  return <StyledButton hoverShadow={hoverShadow} {...rest} />;
}

export default CustomButton;
