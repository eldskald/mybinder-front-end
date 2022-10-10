import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  margin: 32px 0px;
  border: 2px solid var(--textcolor1);
  border-radius: 32px;
  padding: 32px;
  cursor: pointer;
  transition: 0.2s;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  :hover {
    border-color: var(--maincolor);
  }

  @media (max-width: 800px) {
    border-radius: 0px;
    border-left: none;
    border-right: none;
    padding: 32px 16px;
  }
`;

export const Title = styled.div`
  width: 100%;
  margin-bottom: 24px;
  font-family: var(--headerfont);
  font-size: 26px;
  color: var(--textcolor1);
  text-align: left;
`;

export const InnerContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImgAndDescWrapper = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  
  img {
    width: 100%;
  }

  p {
    margin-top: 24px;
    font-family: var(--scriptfont);
    font-size: 16px;
    color: var(--textcolor1);
  }
`;

export const TextWrapper = styled.div`
  width: 46%;
  font-family: var(--scriptfont);
  font-size: 16px;
  color: var(--textcolor1);
`;