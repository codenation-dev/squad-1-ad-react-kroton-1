import styled from 'styled-components';



export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  max-height: 150px;

  font-size: 20px;

  border-radius: 4px;
  background-color: #fff;
  list-style-type: none;

  margin: 10px 0 0 0;
  padding: 5px 10px;

  color : #7155A9;
  border: 1px solid #7155A9;
  box-shadow: 0 4px 2px -2px #7155A9;

  input {
    margin-right: -30px;
  }
  span {
    max-width: 90%;
    min-width: 5%;
    margin-left: 50px;
  }

`;
