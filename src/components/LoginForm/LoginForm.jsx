import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/Auth/operations';
import { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { SignInSchema } from 'schemas/yupschemas';
import {
  Btn,
  InputWrapper,
  Label,
  PasswordBtn,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledPasswordField,
} from 'components/RegisterForm/RegisterForm.styled';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

export const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          const isValid = field =>
            touched[field] && errors[field] ? 'is-invalid' : 'is-valid';
          const emailValid = isValid('email');
          const passwordValid = isValid('password');

          return (
            <StyledForm autoComplete="on">
              <Label>
                Email
                <StyledField type="email" name="email" isvalid={emailValid} />
                <ErrorMessage name="email" component={StyledErrorMessage} />
              </Label>
              <Label>
                Password
                <InputWrapper>
                  <StyledPasswordField
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    autoComplete="off"
                    isvalid={passwordValid}
                  />
                  <PasswordBtn onClick={handlePasswordVisible} type="button">
                    {!passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </PasswordBtn>
                </InputWrapper>
                <ErrorMessage name="password" component={StyledErrorMessage} />
              </Label>

              <Btn type="submit">Sign In</Btn>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};
