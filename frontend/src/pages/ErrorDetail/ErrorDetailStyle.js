import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  margin-top: 50px;
  flex: 1;

  div {
  	background-color: #7155A9;
  	min-width: 60%;
  	max-width: 80%;
  	max-height: 60%;
  	min-height: 400px;
  	border: 3px solid #fff;
  	border-radius: 10px;
  	box-shadow: 5px 5px 18px #7155A9;

    p {
      margin: 20px 20px;
      color: #fff;
    }
    
  }

`;
