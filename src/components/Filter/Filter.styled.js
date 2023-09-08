import styled from 'styled-components';

export const ContactsTitle = styled.h1`
  font-size: 35px;
  color: ${pr => pr.theme.color.accentColor};
  text-align: center;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  margin-bottom: 7px;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 550px;
  }
`;

export const Label = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 20px;
  font-weight: 500;
  color: ${p => p.theme.color.darkColor};
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  padding: 0 15px;
  padding-bottom: 6px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: lightgray;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  transition: border-color ${p => p.theme.transition};

  &:focus-within {
    border-color: ${pr => pr.theme.color.accentColor};
  }
`;
