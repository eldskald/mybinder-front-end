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
    padding: 0px 16px;
    border-radius: 0px;
    border-left: none;
    border-right: none;
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
  margin: 32px 0px 8px 0px;
  font-family: var(--headerfont);
  font-size: 32px;
  color: var(--textcolor1);
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const InputDesc = styled.div`
  font-family: var(--scriptfont);
  font-size: 16px;
  color: var(--textcolor1);
  text-align: center;
  white-space: nowrap;
`;

export const InputField = styled.input`
  flex-grow: 1;
  width: 100%;
  height: 32px;
  margin-left: 8px;
  padding-left: 16px;
  background-color: var(--bgcolor1);
  border-radius: 16px;
  border: 2px solid var(--textcolor1);
  outline: none;
  font-family: var(--scriptfont);
  font-size: 16px;
  color: var(--textcolor1);

  :disabled {
    color: var(--textcolor2);
    border-color: var(--textcolor2);
  }
`;

export const SubmitButton = styled.button`
  width: 196px;
  height: 48px;
  margin: 24px auto 32px auto;
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
  margin-top: 24px;
  font-family: var(--scriptfont);
  font-size: 18px;
  text-align: center;
  color: var(--contrastcolor3);
`;

export const Spinner = styled.div`
  width: 100%;
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoPagesMessage = styled.div`
  margin: 32px 0px 24px 0px;
  width: 100%;
  text-align: center;
  font-family: var(--scriptfont);
  font-size: 24px;
  color: var(--textcolor2);
`;