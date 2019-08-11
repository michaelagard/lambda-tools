import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const SideBarWrapper = styled.div`
  display: flex;
  width: 15%;
  min-width: 195px;
  background: #14121f;
  color: white;
  min-height: 100vh;
  flex-direction: column;
  @media(max-width: 500px) {
    display: none;
  }
`;

export const SideBarH1 = styled.h1`
  font-size: 2rem;
  padding: 2.65rem 1.5rem;
`;

export const SideBarH3 = styled.h3`
  font-size: 1.2rem;
  padding: .65rem 1.5rem;
`;

export const SideBarLink = styled(NavLink)`
  color: #f0f4f7;
  text-decoration: none;
  font-size: 1rem;
  padding: .35rem 1.5rem;
  
  &.active {
    background: #2f2c4b;
  }

  &:hover {
    background: #2f2c4b;
  }
`;

