import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;
export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

export const Span = styled(Link)`
  text-decoration: underline;
  color: ${p => p.theme.color.accentColor};
`;
