import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: fit-content;
  margin: 32px 0px;
  border: 2px solid var(--textcolor1);
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    padding: 16px;
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: ${(props: { show: boolean }) => (props.show ? 'flex' : 'none')};
  align-items: center;
`;

export const InputDesc = styled.div`
  font-family: var(--scriptfont);
  font-size: 16px;
  color: var(--textcolor1);
  text-align: center;
  white-space: nowrap;
`;

export const EntryTypeInput = styled.select`
  width: fit-content;
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

  option {
    font-family: var(--scriptfont);
    font-size: 16px;
    color: var(--textcolor1);
    margin: 8px 0px;

    :hover {
      color: var(--contrastcolor2);
    }
  }
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

export const InputLargeField = styled.textarea`
  flex-grow: 1;
  width: 100%;
  height: 96px;
  margin-left: 8px;
  padding: 16px 16px;
  background-color: var(--bgcolor1);
  border-radius: 16px;
  border: 2px solid var(--textcolor1);
  outline: none;
  resize: none;
  font-family: var(--scriptfont);
  font-size: 16px;
  color: var(--textcolor1);

  :disabled {
    color: var(--textcolor2);
    border-color: var(--textcolor2);
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

export const ButtonsWrapper = styled.div`
  margin: 24px 32px 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UpdateButton = styled.button`
  width: 196px;
  height: 48px;
  border: none;
  border-radius: 8px;
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

  svg {
    margin-right: 6px;
  }

  :hover {
    background-color: var(--maincolor);
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--headerfont);
  font-size: 20px;
  margin-right: 16px;
  color: var(--contrastcolor3);
  display: flex;
  align-items: center;
  transition: 0.2s;
  
  :hover {
    color: var(--contrastcolor1);
  }

  :disabled {
    color: var(--textcolor2);
  }

  svg {
    margin-right: 6px;
  }
`;