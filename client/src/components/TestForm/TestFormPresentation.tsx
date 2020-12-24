import React, { useEffect } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import CustomButton from '../common/CustomButton';

const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 9.6rem 7.4rem;
  color: #333333;
  em {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bold;
    font-size: 2.2rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
    margin-right: 4rem;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  width: 56.7rem;
  height: 30rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.9rem;
  letter-spacing: -0.05rem;
  margin-left: auto;
`;

const ButtonArea = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBox = styled.div`
  width: 78.3rem;
  height: 78.9rem;
  background-color: white;
  border-radius: 3.1rem;
  filter: drop-shadow(0rem 0.8rem 2.2rem rgba(0, 0, 0, 0.08));
`;

const StyledAnswerArea = styled(TextareaAutosize)`
  all: unset;
  letter-spacing: 0.45rem;
  font-size: 1.8rem;
  min-height: 12rem;
  line-height: 3rem;
  background-image: linear-gradient(
    transparent,
    transparent calc(3rem - 0.1rem),
    ${(props) => props.theme.main} 0rem
  );
  background-size: 100% 3rem; // 2rem 마다
`;

interface TestProp {
  page: number;
  question: string;
  answer: string;
  initializePage: () => void;
  handleText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handlePrevious: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleNext: () => void;
  handleTest: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function TestBlock({
  page,
  question,
  answer,
  initializePage,
  handleNext,
  handlePrevious,
  handleText,
  handleTest,
}: TestProp) {
  useEffect(() => {
    initializePage();
    return () => {
      // cleanup
    };
  }, [page]);
  return (
    <FormWrapper>
      <FormBox>
        <ContentWrapper>
          <em>Q{page}</em>
          <ContentArea>
            <Description>{question}</Description>
            <StyledAnswerArea onChange={handleText} value={answer} />
            <ButtonArea>
              <CustomButton onSubmit={handlePrevious}>이전</CustomButton>
              {page == 10 ? (
                <CustomButton
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    handleNext();
                    handleTest(e);
                  }}
                >
                  결과보기
                </CustomButton>
              ) : (
                <CustomButton onClick={handleNext}>다음</CustomButton>
              )}
            </ButtonArea>
          </ContentArea>
        </ContentWrapper>
      </FormBox>
    </FormWrapper>
  );
}

export default TestBlock;
