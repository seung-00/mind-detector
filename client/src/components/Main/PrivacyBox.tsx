import React, { useState } from 'react';
import styled from 'styled-components';

const PrivacyArea = styled.div`
  width: 440px;
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  color: #444444;
  font-weight: 600;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

const PrivacyItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20% 0 20%;
  > label {
    flex: 0 0 100px;
  }
  & + & {
    margin-top: 20px;
  }
`;

const InputArea = styled.form`
  display: flex;
  flex: 1;
  label {
    cursor: pointer;
  }
  input[type='number'],
  select {
    font-family: inherit;
    width: 80%;
    padding: 8px;
    font-size: 15px;
    background: #ffffff;
    border: 1px solid #cacaca;
    box-sizing: border-box;
  }
  input[type='radio']:checked {
    cursor: pointer;
    background-color: ${(props) => props.theme.main};
    border: solid 1px rgba(255, 255, 255, 0.3);
  }
  input[type='radio'] {
    appearance: none;
    border-radius: 100%;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    background: white;
    box-shadow: inset 0px 4px 3px rgba(0, 0, 0, 0.17);
  }
  input + label {
    margin-right: auto;
  }
`;

interface PrivacyProps {
  handleForm: (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function PrivacyBox({ handleForm }: PrivacyProps) {
  return (
    <PrivacyArea>
      <div className="content-area">
        <PrivacyItem>
          <label>나이</label>
          <InputArea>
            <input
              id="age"
              name="age"
              type="number"
              max={100}
              min={0}
              onChange={handleForm}
            />
          </InputArea>
        </PrivacyItem>
        <PrivacyItem>
          <label>성별</label>
          <InputArea>
            <input
              type="radio"
              name="sex"
              value="male"
              id="male"
              onChange={handleForm}
            />
            <label htmlFor="male">남자</label>
            <input
              type="radio"
              name="sex"
              value="female"
              id="female"
              onChange={handleForm}
            />
            <label htmlFor="female">여자</label>
          </InputArea>
        </PrivacyItem>
        <PrivacyItem>
          <label>거주지</label>
          <InputArea className="input-area">
            <select name="regidences" onChange={handleForm}>
              <option value="선택">선택</option>
              <option value="서울">서울</option>
              <option value="대전">대전</option>
              <option value="대구">대구</option>
            </select>
          </InputArea>
        </PrivacyItem>
      </div>
    </PrivacyArea>
  );
}

export default PrivacyBox;
