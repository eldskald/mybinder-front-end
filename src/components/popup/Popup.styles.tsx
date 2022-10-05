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

export const Button = styled.button`
  width: 128px;
  height: 48px;
  margin: 32px auto 0px auto;
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
`;