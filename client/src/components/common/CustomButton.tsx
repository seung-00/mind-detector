import React from 'react';
import styled, { css } from 'styled-components';

interface StyledButtonProps {
  hoverShadow: any;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  background: transparent;
  padding: 1.5rem 1.9rem;
  border-radius: 7.6rem;
  text-align: center;
  font-style: normal;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  line-height: 1.5rem;
  background-color: white;
  border: none;
  color: ${(props) => props.theme.main};
  cursor: pointer;
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
`;

interface CustomButtonProps {
  hoverShadow: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: JSX.Element | JSX.Element[] | string;
}

function CustomButton({ hoverShadow }: CustomButtonProps) {
  return <StyledButton hoverShadow={hoverShadow} />;
}

CustomButton.defaultProps = {
  hoverShadow: false,
  onClick: undefined,
  children: undefined,
};

export default CustomButton;
