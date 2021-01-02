import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../../styles/mixin';
import CustomButton from '../common/CustomButton';

const HospitalWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  min-height: 60%;
  padding: 7rem 0rem;
`;

const HospitalBox = styled.div`
  min-height: 20rem;
  flex: 1;
  background: white;
  filter: drop-shadow(0rem 0.8rem 2.2rem rgba(0, 0, 0, 0.08));
  display: flex;
  flex-direction: column;
  border-radius: 3.1rem;
  align-items: center;
  padding: 0rem 15%;
  ${respondTo.desktop`
    padding: 0rem 10%;
    font-size: 3.5rem;
  `};
`;

const HospitalList = styled.ul`
  width: 100%;
  padding: 5rem 0rem;
`;

const HospitalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HospitalInfoWrapper = styled.li`
  padding: 2rem 0;
`;

const VisitButton = styled(CustomButton)`
  height: 3.5rem;
  color: white;
  background-color: ${(props) => props.theme.main};
`;

const HospitalTextArea = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 3.1rem;
  letter-spacing: -0.05rem;

  > em {
    margin: 0rem 0.5rem;
    font-weight: 500;
    font-size: 2rem;
  }
  > span {
    display: none;
    font-size: 1.5rem;
    ${respondTo.desktop`
      display: block;
    `}
  }
`;

const Border = styled.div`
  width: 100%;
  margin: 1rem 0;
  border: 1px solid #efefef;
`;

const Fence = styled.span`
  width: 0rem;
  height: 1.05rem;
  border: 1px solid #333333;
  order: 1;
  flex-grow: 0;
  margin: 0 1.4rem 0 1.4rem;
`;

function Hospital({ hospitalDatas }: any) {
  const hospitalInfos = hospitalDatas.map((hospitalObj: any, index: any) => {
    return (
      <>
        <HospitalInfoWrapper>
          <HospitalInfo>
            <HospitalTextArea>
              <em>{hospitalObj.name}</em>
              <span>
                <a>{hospitalObj.address}</a>
                <Fence /> <a>{hospitalObj.phonecall}</a>
              </span>
            </HospitalTextArea>
            <VisitButton
              onClick={() => {
                console.log(hospitalObj.address);
                window.location.href = `https://map.naver.com/v5/search/${hospitalObj.address}`;
              }}
            >
              방문하기
            </VisitButton>
          </HospitalInfo>
          <Border />
        </HospitalInfoWrapper>
      </>
    );
  });

  return (
    <HospitalWrapper>
      <HospitalBox>
        <HospitalList>{hospitalInfos}</HospitalList>
      </HospitalBox>
    </HospitalWrapper>
  );
}

export default Hospital;
