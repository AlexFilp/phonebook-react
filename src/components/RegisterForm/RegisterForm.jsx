import {
  StyledForm,
  Label,
  StyledField,
  StyledPasswordField,
  StyledErrorMessage,
  RepeatPassErrorMessage,
  Btn,
  InputWrapper,
  PasswordBtn,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { doRegister } from '../../redux/Auth/operations';
import { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { SignUpSchema } from 'schemas/yupschemas';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

export const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleRepeatPasswordVisible = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

  const initialValues = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const handleSubmit = async (values, actions) => {
    const { repeatPassword, ...restValues } = values;
    dispatch(doRegister(restValues));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          const isValid = field =>
            touched[field] && errors[field] ? 'is-invalid' : 'is-valid';
          const usernameValid = isValid('username');
          const emailValid = isValid('email');
          const passwordValid = isValid('password');
          const repeatPasswordValid = isValid('repeatPassword');

          return (
            <StyledForm autoComplete="on">
              <Label>
                Username
                <StyledField
                  type="text"
                  name="username"
                  isvalid={usernameValid}
                />
                <StyledErrorMessage>
                  <ErrorMessage name="username" />
                </StyledErrorMessage>
              </Label>
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
              <Label>
                Repeat password
                <InputWrapper>
                  <StyledPasswordField
                    type={repeatPasswordVisible ? 'text' : 'password'}
                    name="repeatPassword"
                    autoComplete="off"
                    isvalid={repeatPasswordValid}
                  />
                  <PasswordBtn
                    onClick={handleRepeatPasswordVisible}
                    type="button"
                  >
                    {!repeatPasswordVisible ? (
                      <AiFillEye />
                    ) : (
                      <AiFillEyeInvisible />
                    )}
                  </PasswordBtn>
                </InputWrapper>
                <ErrorMessage
                  name="repeatPassword"
                  component={RepeatPassErrorMessage}
                />
              </Label>
              <Btn type="submit">Sign Up</Btn>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};
