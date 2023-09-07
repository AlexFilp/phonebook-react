import { NaviLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <NaviLink to={'/register'}>Register</NaviLink>
      <NaviLink to={'/login'}>Log in</NaviLink>
    </nav>
  );
};
