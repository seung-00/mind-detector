import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../../styles/mixin';

const FooterArea = styled.footer`
  height: 10vh;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  ${respondTo.desktop`
    font-size: 1.2rem;
    `}
  p {
    margin: 0 0.5rem;
  }
`;

function Footer() {
  return (
    <FooterArea>
      <p>제4회 정부혁신제안 끝장개발대회 최우수 수상작,</p>
      <a href="https://github.com/sarah5398/mind-detector">GitHub</a>
    </FooterArea>
  );
}

export default Footer;
