import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 400px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: ${pr => pr.theme.boxShadow};
`;

export const Label = styled.label`
  font-size: 25px;
  margin-bottom: 8px;
  width: 100%;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 5px;
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  font-size: 20px;
  width: 100%;
  height: 30px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  border-radius: 4px;
  outline: none;
  border: none;
  box-shadow: ${pr => pr.theme.boxShadow};
`;
export const ErrorMessageContainer = styled.div`
  height: auto;

  width: 100%;
  text-align: center;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  color: red;
`;

export const Btn = styled.button`
  display: block;
  margin-top: 10px;
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
