import styled from 'styled-components';

export const LogoWrapper = styled.div`
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 32px;
    font-family: var(--logofont);
    font-size: 72px;
    color: var(--maincolor);
    text-align: center;
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
  margin-top: 32px;
  font-family: var(--scriptfont);
  font-size: 28px;
  color: var(--textcolor1);
  text-align: center;
`;

export const LinkWrapper = styled.div`
  margin-top: 44px;

  a {
    font-family: var(--scriptfont);
    font-size: 28px;
    color: var(--maincolor);
    text-align: center;
    transition: 0.2s;

    :hover {
      color: var(--contrastcolor2);
    }
  }
`;