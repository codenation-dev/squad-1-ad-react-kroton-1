import styled from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(
    0deg,
    ${rgba('#CFBCF6', 0.2)},
    ${rgba('#CFBCF6', 0.1)}
  );
  overflow-y: scroll;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

