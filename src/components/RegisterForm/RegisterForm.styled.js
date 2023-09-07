import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 550px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 20px;
  font-weight: 500;
  color: #010101;
`;

export const StyledField = styled(Field)`
  height: 50px;
  width: 100%;
  padding: 0 15px;
  padding-bottom: 6px;
  border: 2px solid ${({ isValid }) => (isValid ? 'transparent' : 'red')};
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

export const StyledPasswordField = styled(Field)`
  height: 50px;
  width: 100%;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 42px;
  border: 2px solid ${({ isValid }) => (isValid ? 'transparent' : 'red')};
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

export const StyledErrorMessage = styled.p`
  position: absolute;
  top: 6px;
  right: 5px;
  color: red;
  font-size: 14px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    top: 0;
    font-weight: 400;
  }
`;

export const RepeatPassErrorMessage = styled.p`
  position: absolute;

  right: 5px;
  color: red;
  font-size: 14px;

  @media screen and (max-width: 374px) {
    bottom: -20px;
  }

  @media screen and (min-width: 375px) {
    top: 6px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    top: 0;
    font-weight: 400;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const PasswordBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 23px;
`;

export const Btn = styled.button`
  display: block;
  margin-top: 20px;
  background-color: ${p => p.theme.color.accentColor};
  color: white;
  border: none;
  border-radius: 10px;
  height: 45px;
  font-weight: 500;
  cursor: pointer;

  transition: background-color ${p => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.hoverAccentColor};
  }

  &:active {
    background-color: ${p => p.theme.color.accentColor};
  }
`;
