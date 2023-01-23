import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  padding: 15px;
`;

export const MovieThumb = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const MovieOverview = styled.div`
  margin-left: 30px;
`;

export const MoreInfo = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  margin-right: 30px;
  padding: 5px;
  text-decoration: none;
  border-radius: 3px;
  cursor: pointer;

  &.active {
    color: white;
    background-color: orange;
  }
`;
