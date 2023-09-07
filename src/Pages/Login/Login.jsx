import { GlobalContainer } from '../../components/GlobalStyle';
import { Wrapper, Title, Text, Span } from './Login.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <GlobalContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Wrapper>
        <Title>Sign In</Title>
        <LoginForm />
      </Wrapper>
      <Text>
        Dont have an account? <Span to="/login">Register.</Span>
      </Text>
    </GlobalContainer>
  );
}
