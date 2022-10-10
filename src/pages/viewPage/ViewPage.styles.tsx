import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: 240px;
  margin: 32px 0px;
  border: 2px solid var(--textcolor1);
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: var(--headerfont);
  font-size: 32px;
  color: var(--textcolor1);
  cursor: pointer;
  transition: 0.2s;

  :hover {
    color: var(--maincolor);
    border-color: var(--maincolor);
  }

  @media (max-width: 800px) {
    width: calc(100% - 64px);
    margin: 32px;
  }
`;