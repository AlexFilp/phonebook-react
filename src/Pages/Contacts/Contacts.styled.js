import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const FormWrapper = styled.div`
  padding-top: 30px;

  @media screen and (min-width: 1440px) {
    width: 500px;
    margin-left: auto;
    margin-right: 130px;
  }
`;

export const BookWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    padding-top: 30px;
    width: 600px;
  }
`;

export const FormTitle = styled.h1`
  font-size: 40px;
  color: ${pr => pr.theme.color.accentColor};
  text-align: center;
  margin-bottom: 10px;
`;

export const LineDiv = styled.div`
  display: block;
  margin-top: 20px;
  margin-bottom: 15px;
  width: 100%;
  height: 6px;
  background-color: ${pr => pr.theme.color.accentColor};

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
