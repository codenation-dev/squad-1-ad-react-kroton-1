import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  border: none;
  background-color: ${props => (props.inverted ? '#fff' : '#7155A9')};
  color: ${props => (props.inverted ? '#7155A9' : '#fff')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  :hover {
    background-color: ${props =>
      props.inverted ? darken(0.1, '#fff') : darken(0.1, '#7155A9')};
  }
`;
