import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  background-color: #7155a9;
  border: 3px solid #fff;
  border-radius: 4px;
  padding: 5px 10px 0px 10px;
  box-shadow: 10px 10px 30px #7155a9;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10px;

  p {
    margin: 5px;
    color: #fff;
  }

  span {
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
