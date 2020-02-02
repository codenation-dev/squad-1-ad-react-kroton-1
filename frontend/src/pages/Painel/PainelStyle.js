import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;

  border-radius: 4px;
  background-color: #fff;
  list-style-type: none;

  margin: 5px 0 0 0;
  padding: 5px 15px;

  color : #7155A9;
  border: 1px solid #7155A9;
  box-shadow: 9px 7px 5px rgba('#7155A9');

  span {
    display: flex;
    flex-direction: row;
    
    
    svg {
      align-items: center;
      margim: 0px 30px;
      width: 30px;
      height: 30px;
    }
  }

`;

export const OpcaoAmbiente = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;

  border-radius: 4px;
  background-color: #fff;
  list-style-type: none;

  margin: 5px 0 0 0;
  padding: 5px 15px;

  color : #7155A9;
  border: 1px solid #7155A9;
  

  span {
    display: flex;
    flex-direction: row;

    button {
      background-color: #fff;
    }
  
  }

`;


