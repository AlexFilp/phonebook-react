import {
  StyledForm,
  Label,
  Span,
  StyledField,
  ErrorMessageContainer,
  ErrorText,
  Btn,
  Text,
  HomeRegisterLink,
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
            touched[field] && errors[field] ? false : true;
          const nameValid = isValid('name');
          const emailValid = isValid('email');
          const passwordValid = isValid('password');
          const repeatPasswordValid = isValid('repeatPassword');

          return (
            <StyledForm autoComplete="on">
              <Label>
                <Span>Username</Span>
                <StyledField type="text" name="username" />
                <p>
                  <ErrorMessage name="username" />
                </p>
              </Label>
              <Label>
                <Span>Email</Span>
                <StyledField type="email" name="email" />
                <p>
                  <ErrorMessage name="email" />
                </p>
              </Label>
              <Label>
                <Span>Password</Span>
                <div>
                  <StyledField
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    autoComplete="off"
                  />
                  <button onClick={handlePasswordVisible} type="button">
                    {!passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
                <p>
                  <ErrorMessage name="password" />
                </p>
              </Label>
              <Label>
                <Span>Repeat password</Span>
                <div>
                  <StyledField
                    type={repeatPasswordVisible ? 'text' : 'password'}
                    name="repeatPassword"
                    autoComplete="off"
                  />
                  <button onClick={handleRepeatPasswordVisible} type="button">
                    {!repeatPasswordVisible ? (
                      <AiFillEye />
                    ) : (
                      <AiFillEyeInvisible />
                    )}
                  </button>
                </div>
                <p>
                  <ErrorMessage name="repeatPassword" />
                </p>
              </Label>
              <Btn type="submit">Sign Up</Btn>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};
