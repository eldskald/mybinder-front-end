import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 96px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 44px;
  background-image: linear-gradient(
    to bottom,
    var(--divcolor4-light),
    var(--divcolor4));
  border-bottom: 2px solid var(--divcolor4-dark);

  @media (max-width: 800px) {
    padding: 0px 24px;
  }
`;

export const Logo = styled.div`
  a {
    font-family: var(--logofont);
    font-size: 54px;
    color: var(--contrastcolor1);
    display: flex;
    align-items: center;
    cursor: pointer;
  
    svg {
      margin-right: 16px;
      margin-bottom: 6px;
    }

    p {
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;

  a:first-child {
    margin-right: 44px;
    cursor: pointer;
    font-family: var(--headerfont);
    font-size: 32px;
    color: var(--bgcolor1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;

    :hover {
      color: var(--maincolor);
    }

    @media (max-width: 800px) {
      font-size: 24px;
      margin-right: 18px;
    }
  }

  a:last-child {
    width: 128px;
    height: 46px;
    border-radius: 4px;
    background-color: var(--contrastcolor2);
    cursor: pointer;
    font-family: var(--headerfont);
    font-size: 32px;
    color: var(--contrastcolor1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;

    :hover {
      background-color: var(--maincolor);
    }

    @media (max-width: 800px) {
      font-size: 24px;
      width: 96px;
      height: 36px;
    }
  }
`;