import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 500px;
  min-width: 300px;
  background-color: #f5f5f5;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0px 0px 17px 0px rgba(199, 199, 199, 1);

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    border: none;
    border-bottom: 1px solid #d9d9d9;
    text-align: center;
    background-color: whitesmoke;

    :focus {
      background-color: #fff;
    }
  }
`;
