import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: #a20000;
  color: #fff;
  margin: 10px 0;
  padding: 5px 15px;
  border-radius: 3px;
  display: flex;
  justify-content: ${props => (props.elements ? 'space-between' : 'center')};
  align-items: center;

  svg {
    margin-right: 15px;
  }
`;
