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

export const ErrorMessage = styled.div`
  width: 100%;
  margin-top: 24px;
  font-family: var(--scriptfont);
  font-size: 24px;
  text-align: center;
  color: var(--contrastcolor3);
`;