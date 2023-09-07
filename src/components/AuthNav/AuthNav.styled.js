import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NaviLink = styled(NavLink)`
  font-size: 25px;
  font-weight: 500;
  transition: color ${pr => pr.theme.transition};
  &:hover,
  &:focus,
  &.active {
    color: ${pr => pr.theme.color.accentColor};
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
