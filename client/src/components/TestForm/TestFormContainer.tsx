import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveAnswer } from '../../modules/test';
import TestForm from './TestForm';
import { questions } from '../../constants/questions';
import { RootState } from '../../modules';
import { postTest } from '../../modules/post-test';

function TestFormContainer() {
  const testForm = useSelector((state: RootState) => state.test);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [answer, setAnswer] = useState('');
  const regExp = /[\{\}\[\]\/?;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

  const initializePage = () => {
    setAnswer('');
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const answer = e.target.value;
    if (regExp.test(answer)) {
      alert('답변에 "." 와 "," 를 제외한 특수 문자를 포함하지 말아주세요.');
    } else if (answer.length > 80) {
      alert('80자 이내로 작성해주세요.');
    } else {
      setAnswer(answer);
    }
  };

  const handlePrevious = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (page == 1) {
      alert('이전 페이지가 없습니다.');
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (answer.length < 5) {
      alert('답변을 5자 이상으로 작성해주세요.');
    } else {
      const pageKey = 'answer' + String(page);
      const testData = { pageKey: pageKey, answer: answer };
      dispatch(saveAnswer(testData));
      setPage(page + 1);
    }
  };

  const handleTest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(postTest(testForm));
  };

  return (
    <TestForm
      page={page}
      question={questions[page - 1]}
      answer={answer}
      initializePage={initializePage}
      handleText={handleText}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
      handleTest={handleTest}
    />
  );
}

export default TestFormContainer;
