import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  color: #7155A9;
  border: 2px solid  #7155A9;
  border-radius: 4px
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    padding-left: 10px;
    display: flex;
    flex-direction: column;

    img {
      width: 50px;
      border-radius: 50%;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color:#7155A9;

  div {
    display: flex;
    flex-direction: column;
  }
  img {
    heigth: 30px;
    width: 30px;
    margin-bottom: 15px;
  }
`;