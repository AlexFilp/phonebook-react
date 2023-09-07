import { Wrapper, Title } from 'components/RegisterForm/RegisterForm.styled';
import { GlobalContainer } from '../../components/GlobalStyle';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

export default function Register() {
  return (
    <GlobalContainer>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Wrapper>
        <Title>Sign Up</Title>
        <RegisterForm />
      </Wrapper>
    </GlobalContainer>
  );
}
