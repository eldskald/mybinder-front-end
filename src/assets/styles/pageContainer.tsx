import styled from 'styled-components';

const PageContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default PageContainer;