import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 35px;
  cursor: pointer;
  color: ${p => p.theme.color.darkColor};

  transition: color ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: ${p => p.theme.color.accentColor};
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);

  opacity: ${({ showSideBar }) => (showSideBar ? '1' : '0')};
  pointer-events: ${({ showSideBar }) => (showSideBar ? 'auto' : 'none')};
  transition: opacity ${p => p.theme.transition};
  z-index: 100;
`;

export const Bar = styled.div`
  padding: 80px 30px 60px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border-right: 2px solid ${p => p.theme.color.accentColor};
  border-bottom: 2px solid ${p => p.theme.color.accentColor};
  transform: translateX(${({ showSideBar }) => (showSideBar ? '0' : '-100%')});
  transition: transform ${p => p.theme.transition};
  z-index: 150;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 17px;
  left: 15px;
  border: none;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;

  transition: color ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: ${p => p.theme.color.accentColor};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
`;

export const LogoutBtn = styled.button`
  font-size: 25px;
  font-weight: 500;
  transition: color ${pr => pr.theme.transition};
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus,
  &.active {
    color: ${pr => pr.theme.color.accentColor};
  }
`;
