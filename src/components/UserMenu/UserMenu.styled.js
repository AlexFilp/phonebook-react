import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 23px;
  font-weight: 500;
`;

export const Btn = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 28px;
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

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
