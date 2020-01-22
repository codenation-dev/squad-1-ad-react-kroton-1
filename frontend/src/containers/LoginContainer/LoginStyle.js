import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  min-width: 250px;
  background-color: #f5f5f5;
  padding: 1em;
  border-radius: 5px;
  margin: 40vh auto 0 auto;
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
