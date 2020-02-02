import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  border: none;
  background-color: #7155A9;
  height: 40px;
  color: #fff;
  margin: 10px 0;
  padding: 5px 15px;
  border-radius: 4px;
  display: flex;
  justify-content: ${props => (props.elements ? 'space-between' : 'center')};
  align-items: center;
  font-family: 'Montserrat', sans-serif;


  :hover {
    background-color: ${darken(0.1, '#CFBCF6')};
  }

  svg {
    margin-right: 15px;
  }
`;
