import React from 'react';
import styled from 'styled-components';
import CustomButton from '../common/CustomButton';

const HospitalArea = styled.div`
  margin-top: 6.8rem;
  width: 93.5rem;
  height: 56.8rem;
  background: #ffffff;
  box-shadow: 0rem 0.4rem 1.4rem rgba(0, 0, 0, 0.1);
  border-radius: 1.6rem;
`;

const VisitButton = styled(CustomButton)`
  height: 3.5rem;
  color: white;
  background-color: ${(props) => props.theme.main};
`;

const HospitalList = styled.ul`
  /* display: flex; */
  padding: 6.2rem 6rem 0rem 7.3rem;
`;

const HospitalInfo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    font-size: 1.5rem;
    margin: 1.4rem 0rem;
  }
`;

const Border = styled.div`
  box-sizing: border-box;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  border: 1px solid #cacaca;
`;

const Fence = styled.span`
  box-sizing: border-box;
  width: 0rem;
  height: 1.05rem;
  border: 1px solid #333333;
  order: 1;
  flex-grow: 0;
  margin: 0 1.4rem 0 1.4rem;
`;

function HospitalBox({ hospitalMock }: any) {
  const hospitalInfos = hospitalMock.map((hospitalObj: any, index: any) => {
    console.log(hospitalObj);
    return (
      <>
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
      </>
    );
  });

  return (
    <HospitalArea>
      <HospitalList>{hospitalInfos}</HospitalList>
    </HospitalArea>
  );
}

export default HospitalBox;
