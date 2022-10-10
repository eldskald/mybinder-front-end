import styled from 'styled-components';

export const Spacer = styled.div<{ length: string }>`
  width: 100%;
  margin-top: ${props => props.length ? '64px' : props.length};
  border: 1px solid white;
`;