import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  diplay: flex;
  flex-direction: row;
  height: 100%;
  width: 80%;
  background-color: #7155A9;
  border: 3px solid #fff;
  border-radius: 4px;
  padding: 5px 10px 0px 10px;
  box-shadow: 10px 10px 30px #7155A9;
  

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    #title {
      display: flex;
      justify-content: flex-start;
    }

    #button-exit{
      display: flex;
    justify-content: flex-end;
    }

    button {
      border: none;
      background-color: #fff;
      height: 40px;
      color: #7155A9;
      margin: 10px 0;
      padding: 5px 15px;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      font-family: 'Montserrat', sans-serif;

      :hover {
        background-color: #fff;
        color:  #7155A9;
      }
    }
  }
  #main p {
   
    margin: 5px;
    color: #fff;
    
  }
  #footer  {
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    #group-button {
        display: flex;
        flex-direction: row;

        button {
          margin-left: 10px;
        }
    }
  }
`;
