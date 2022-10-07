import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupContainer = styled.div`
  width: 420px;
  padding: 32px;
  border-radius: 32px;
  border: 2px solid var(--textcolor1);
  background-color: var(--divcolor2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Message = styled.p`
  width: 100%;
  text-align: center;
  font-family: var(--scriptfont);
  font-size: 20px;
  color: var(--textcolor1);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const OkButton = styled.div`
  width: 128px;
  height: 48px;
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

export const CancelButton = styled.div`
  background-color: transparent;
  cursor: pointer;
  font-family: var(--scriptfont);
  font-size: 24px;
  color: var(--contrastcolor2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  :hover {
    color: var(--maincolor);
  }
`;