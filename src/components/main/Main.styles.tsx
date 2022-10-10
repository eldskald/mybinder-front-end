import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  height: ${(props: { noHeader: boolean }) => (props.noHeader ? '100%' : 'calc(100% - 64px)' )};
  width: 100%;
  top: ${(props: { noHeader: boolean }) => (props.noHeader ? '0px' : '64px' )};
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background-image: linear-gradient(to bottom right, var(--bgcolor1), var(--bgcolor2));
`;

export const PageContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Spacer = styled.div<{ length: string }>`
  width: 100%;
  min-height: ${props => props.length ? '64px' : props.length};
`;