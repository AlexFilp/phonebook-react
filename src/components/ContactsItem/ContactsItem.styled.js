import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${pr => pr.theme.color.accentColor};
  border-radius: 10px;
  padding: 5px 8px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const PhoneNumber = styled.a`
  display: block;
  font-size: 20px;
  color: ${pr => pr.theme.color.accentColor};
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
  color: ${p => p.theme.color.darkColor};

  transition: color ${pr => pr.theme.transition},
    transform ${pr => pr.theme.transition};

  &:hover,
  &:focus {
    color: ${pr => pr.theme.color.accentColor};
    transform: scale(1.1);
  }
`;
