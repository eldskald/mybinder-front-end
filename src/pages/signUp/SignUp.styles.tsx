import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: fit-content;
  background-color: var(--divcolor1);
  border: 2px solid var(--textcolor1);
  border-radius: 32px;
  padding: 0px 32px 64px 32px;

  @media (max-width: 800px) {
    background-color: var(--bgcolor);
    border: none;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  margin: 32px 0px 52px 0px;
  font-family: var(--headerfont);
  font-size: 52px;
  color: var(--contrastcolor1);
  text-align: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  margin: 24px 0px 8px 16px;
  font-family: var(--scriptfont);
  font-size: 18px;
  color: var(--textcolor1);

  :disabled {
    color: var(--textcolor2);
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 16px;
  background-color: var(--bgcolor);
  border-radius: 24px;
  border: 2px solid var(--textcolor1);
  outline: none;
  font-family: var(--scriptfont);
  font-size: 18px;
  color: var(--textcolor1);

  :disabled {
    color: var(--textcolor2);
    border-color: var(--textcolor2);
  }
`;