import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px;
`;

export const Header = styled.header`
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > nav {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;

export const Link = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 5px;
  color: black;
  text-decoration: none;

  &.active {
    color: white;
    background-color: skyblue;
  }
`;
