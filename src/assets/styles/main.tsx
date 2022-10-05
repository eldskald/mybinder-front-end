import styled from 'styled-components';

const Main = styled.div`
  position: absolute;
  top: 96px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background-image: linear-gradient(to bottom right, var(--bgcolor1), var(--bgcolor2));
`;

export default Main;