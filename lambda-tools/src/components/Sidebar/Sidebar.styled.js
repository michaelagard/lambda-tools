import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const lambdaLightBlue = "#14121f";

export const SideBarWrapper = styled.div`
  display: flex;
  width: 18%;
  min-width: 22rem;
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
  padding: 2.65rem 1.5rem;
`;

export const SideBarH3 = styled.h3`
  font-size: 2rem;
  padding: .65rem 1.5rem;
  padding-top: 1.6rem;
`;

export const SideBarLink = styled(NavLink)`
  color: #f0f4f7;
  text-decoration: none;
  font-size: 1.8rem;
  padding: .95rem 2rem;
  
  &.active {
    background: #2f2c4b;
  }

  &:hover {
    background: #2f2c4b;
  }
`;

