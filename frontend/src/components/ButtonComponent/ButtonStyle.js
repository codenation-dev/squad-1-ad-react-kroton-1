import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  border: none;
  background-color: #a20f00;
  color: #fff;
  margin: 10px 0;
  padding: 5px 15px;
  border-radius: 3px;
  display: flex;
  justify-content: ${props => (props.elements ? 'space-between' : 'center')};
  align-items: center;

  :hover {
    background-color: ${darken(0.1, '#a20f00')};
  }

  svg {
    margin-right: 15px;
  }
`;
