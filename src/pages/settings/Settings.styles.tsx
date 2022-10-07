import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: fit-content;
  margin: 32px 0px;
  border: 2px solid var(--textcolor1);
  border-radius: 32px;
  padding: 0px 32px;
  background-image: linear-gradient(
    to bottom right,
    var(--divcolor1-light) 0%,
    var(--divcolor1) 60%,
    var(--divcolor1-dark) 100%);

  @media (max-width: 800px) {
    width: 100%;
    background-image: none;
    background-color: var(--bgcolor);
    border: none;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  margin: 64px 0px 12px 0px;
  font-family: var(--headerfont);
  font-size: 52px;
  color: var(--contrastcolor1);
  text-align: center;
`;

export const Text = styled.div`
  width: 100%;
  margin-top: 36px;
  font-family: var(--scriptfont);
  font-size: 20px;
  color: var(--textcolor1);
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
  background-color: var(--bgcolor1);
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

export const SubmitButton = styled.button`
  width: 196px;
  height: 48px;
  margin: 46px auto 32px auto;
  border: none;
  border-radius: 24px;
  background-color: var(--contrastcolor2);
  cursor: pointer;
  font-family: var(--headerfont);
  font-size: 24px;
  text-align: center;
  color: var(--contrastcolor1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  :hover {
    background-color: var(--maincolor);
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  font-family: var(--scriptfont);
  font-size: 18px;
  text-align: center;
  color: var(--contrastcolor3);
`;