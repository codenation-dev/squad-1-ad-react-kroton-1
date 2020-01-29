import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: #a20000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  color: #ffffff;
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
