import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: flex;
  margin-bottom: 15px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  width: 80px;
  border-radius: 5px;

  :hover {
    color: white;
    background-color: orange;
  }
`;
