import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: fit-content;
  margin: 0px auto 48px auto;
  border: 2px solid var(--textcolor1);
  border-radius: 32px;
  padding: 32px;
  background-image: linear-gradient(
    to bottom right,
    var(--divcolor1-light) 0%,
    var(--divcolor1) 60%,
    var(--divcolor1-dark) 100%);

  @media (max-width: 800px) {
    width: 100%;
    padding: 32px 16px;
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
`;

export const TitleAndDeleteWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Title = styled.div`
  margin-left: 16px;
  font-family: var(--headerfont);
  font-size: 26px;
  color: var(--textcolor1);
`;

export const ChangeTitleForm= styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  width: 160px;
  height: 32px;
  margin-left: 16px;
  border: none;
  border-radius: 16px;
  background-color: var(--contrastcolor2);
  cursor: pointer;
  font-family: var(--headerfont);
  font-size: 20px;
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
  margin: 12px 0px 0px 32px;
  font-family: var(--scriptfont);
  font-size: 18px;
  text-align: left;
  color: var(--contrastcolor3);
`;

export const ButtonsWrapper = styled.div`
  margin: 32px 0px 0px 24px;
  display: flex;
  align-items: center;

  a:first-child {
    width: 120px;
    height: 44px;
    font-family: var(--headerfont);
    font-size: 24px;
    color: var(--contrastcolor1);
    margin-left: 32px;
    border-radius: 8px;
    background-color: var(--contrastcolor2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
      background-color: var(--maincolor);
    }

    svg {
      margin: 0px 6px 4px 0px;
    }
  }

  a:last-child {
    font-family: var(--headerfont);
    font-size: 24px;
    margin-left: 72px;
    color: var(--contrastcolor2);
    display: flex;
    align-items: center;
    transition: 0.2s;
    
    :hover {
      color: var(--contrastcolor1);
    }
    
    svg {
      margin-right: 8px;
    }
  }
`;