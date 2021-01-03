import React, { useEffect } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import CustomButton from '../common/CustomButton';
import { respondTo } from '../../styles/mixin';

const FormWrapper = styled.div`
  position: relative;
  min-height: 60%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  padding: 0rem 4rem;
  ${respondTo.desktop`
    min-height: 80vh;
    padding: 0rem 6rem;
  `}
`;

const FormBox = styled.div`
  height: 50rem;
  ${respondTo.desktop`
    height: 100%;
  `}
  flex: 1;
  background-color: white;
  border-radius: 3.1rem;
  filter: drop-shadow(0rem 0.8rem 2.2rem rgba(0, 0, 0, 0.08));
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5rem 5.5rem;
  ${respondTo.desktop`
    padding: 9.6rem 7.4rem;
  `}
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
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  font-style: normal;
  height: 25rem;
  font-weight: 600;
  line-height: 2.9rem;
  font-size: 1.8rem;
  letter-spacing: -0.05rem;
`;

const ButtonWrapper = styled.div`
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  position: absolute;
  width: 100%;
  left: 0rem;
  bottom: -15rem;
  ${respondTo.desktop`
    position: static;
    margin-top: auto;
  `}
`;

const TestButton = styled(CustomButton)`
  border-radius: 72px;
  padding: 2.3rem;
  ${respondTo.desktop`
    padding: 1.2rem 1.9rem;
    border-radius: 7.6rem;
  `}
  .desktop-btn {
    display: none;
    ${respondTo.desktop`
      display: inline;
    `}
  }
  .mobile-btn {
    font-size: 3.5rem;
    display: inline;
    ${respondTo.desktop`
      display: none;
    `}
  }
  .mobile-rst {
    font-size: 2.5rem;
  }
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
            <StyledAnswerArea onChange={handleText} value={answer} autoFocus />
            <ButtonArea>
              <ButtonWrapper>
                <TestButton onClick={handlePrevious}>
                  <span className="desktop-btn">이전</span>
                  <span className="mobile-btn">{'<'}</span>
                </TestButton>
                {page == 10 ? (
                  <TestButton
                    onClick={(
                      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                      handleNext();
                      handleTest(e);
                    }}
                  >
                    <span className="desktop-btn">결과보기</span>
                    <span className="mobile-btn mobile-rst">결과</span>
                  </TestButton>
                ) : (
                  <TestButton onClick={handleNext}>
                    <span className="desktop-btn">다음</span>
                    <span className="mobile-btn">{'>'}</span>
                  </TestButton>
                )}
              </ButtonWrapper>
            </ButtonArea>
          </ContentArea>
        </ContentWrapper>
      </FormBox>
    </FormWrapper>
  );
}

export default TestBlock;
