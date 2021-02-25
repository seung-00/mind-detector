import React from 'react';
import styled from 'styled-components';
import LeftCircle from '../../assets/img/left_circle.png';
import CenterCircle from '../../assets/img/center_circle.png';
import RightCircle from '../../assets/img/right_circle.png';
import { respondTo } from '../../styles/mixin';

const CircleWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  img {
    max-width: 100%;
  }
`;
const LeftCircleWrapper = styled.div`
  margin-right: auto;
`;
const CenterCircleWrapper = styled.div``;
const RightCircleWrapper = styled.div`
  margin-left: auto;
  display: none;
  ${respondTo.tablet`
    display: block;`}
`;

function BottomBlock() {
  return (
    <CircleWrapper>
      <LeftCircleWrapper>
        <img src={LeftCircle} />
      </LeftCircleWrapper>
      <CenterCircleWrapper>
        <img src={CenterCircle} />
      </CenterCircleWrapper>
      <RightCircleWrapper>
        <img src={RightCircle} />
      </RightCircleWrapper>
    </CircleWrapper>
  );
}

export default BottomBlock;
