import { useState } from 'react';
import {
  Backdrop,
  Bar,
  Btn,
  CloseBtn,
  List,
  LogoutBtn,
  SideBarWrapper,
} from './SideBar.styled';
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';
import { NaviLink } from 'components/AuthNav/AuthNav.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';

export const SideBar = ({ isLoggedIn }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  useOnClickOutside(sidebarRef, () => setShowSideBar(false));

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <SideBarWrapper>
      <Btn type="button" onClick={toggleSideBar}>
        <RxHamburgerMenu />
      </Btn>
      <Backdrop showSideBar={showSideBar}>
        <Bar ref={sidebarRef} showSideBar={showSideBar}>
          <CloseBtn onClick={() => setShowSideBar(false)}>
            <MdClose />
          </CloseBtn>
          <nav>
            <List>
              <li>
                {!isLoggedIn ? (
                  <NaviLink onClick={() => setShowSideBar(false)} to="/">
                    Home
                  </NaviLink>
                ) : (
                  <NaviLink
                    onClick={() => setShowSideBar(false)}
                    to="/contacts"
                  >
                    Contacts
                  </NaviLink>
                )}
              </li>
              {!isLoggedIn && (
                <li>
                  <NaviLink onClick={() => setShowSideBar(false)} to={'/login'}>
                    Log in
                  </NaviLink>
                </li>
              )}
              {!isLoggedIn && (
                <li>
                  <NaviLink
                    onClick={() => setShowSideBar(false)}
                    to={'/register'}
                  >
                    Register
                  </NaviLink>
                </li>
              )}
              {isLoggedIn && (
                <LogoutBtn type="button" onClick={handleLogOut}>
                  Logout
                </LogoutBtn>
              )}
            </List>
          </nav>
        </Bar>
      </Backdrop>
    </SideBarWrapper>
  );
};
