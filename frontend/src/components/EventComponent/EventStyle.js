import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;

  font-size: 20px;

  border-radius: 4px;
  background-color: #fff;
  list-style-type: none;

  margin: 10px 0 0 0;
  padding: 5px 10px;

  color: #7155a9;
  border: 1px solid #7155a9;
  box-shadow: 0 4px 2px -2px #7155a9;

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 10%;
    }
    .center {
      width: 80%;
    }
    .right {
      width: 10%;
    }
  }
`;
