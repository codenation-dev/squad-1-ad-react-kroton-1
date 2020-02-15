import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  border: none;
  background-color: ${props => (props.inverted ? '#fff' : '#7155A9')};
  height: 40px;
  color: ${props => (props.inverted ? '#7155A9' : '#fff')};
  margin: 10px 0;
  padding: 5px 15px;
  border-radius: 4px;
  display: flex;
  justify-content: ${props => (props.elements ? 'space-between' : 'center')};
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  border: ${props => (props.inverted ? '1' : '0')};

  :hover {
    background-color: ${props =>
      props.inverted ? darken(0.1, '#fff') : darken(0.1, '#7155A9')};
  }

  svg {
    margin-right: 15px;
  }
`;
