import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 5px;
  background-image: linear-gradient(to bottom right, var(--bgcolor1), var(--bgcolor2));
  display: flex;
  align-items: center;
  justify-content: center;
`;