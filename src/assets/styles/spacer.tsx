import styled from 'styled-components';

const Spacer = styled.div<{ length: string }>`
  width: 100%;
  min-height: ${props => props.length ? '64px' : props.length};
`;

export default Spacer;