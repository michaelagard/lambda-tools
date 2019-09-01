import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const lambdaLightBlue = "#14121f";

export const SideBarWrapper = styled.div`
  display: flex;
  min-width: 16.7%;
  background: ${lambdaLightBlue};
  color: white;
  min-height: 100vh;
  flex-direction: column;

  @media(max-width: 500px) {
    display: none;
  }
`;

export const SideBarH1 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  padding: 2.65rem 1.5rem;
`;

export const SideBarH3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  padding: 2.5rem 2.5rem;
  padding-top: 1.6rem;
`;

export const SideBarLink = styled(NavLink)`
  color: #f0f4f7;
  text-decoration: none;
  font-size: 1.6rem;
  padding: .95rem 3rem;
  
  &.active {
    background: #2f2c4b;
  }

  &:hover {
    background: #2f2c4b;
  }
`;

