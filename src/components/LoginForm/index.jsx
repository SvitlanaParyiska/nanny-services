import { Formik, Field } from 'formik';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import { loginSchema } from '../../helpers/validationSchemas';
import { ErrorMessage } from 'formik';
import {
  ButtonStyled,
  ErrorText,
  FormWrapper,
  IconPasswordWrapper,
  InputWrapper,
  SvgPasswordIcon,
} from './LoginForm.styled';

import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authOperations';

function LoginForm({ handleModalToggle }) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const passwordIcon = showPassword ? 'icon-eye' : 'icon-eye-off';

  const handleSubmit = async ({ email, password }, actions) => {
    try {
      dispatch(logIn({ email, password }));
      actions.resetForm();
      handleModalToggle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <InputWrapper>
              <label>
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component={ErrorText} />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
                <IconPasswordWrapper onClick={togglePassword}>
                  <SvgPasswordIcon>
                    <use href={`${sprite}#${passwordIcon}`} />
                  </SvgPasswordIcon>
                </IconPasswordWrapper>
                <ErrorMessage name="password" component={ErrorText} />
              </label>
            </InputWrapper>
          </FormWrapper>
          <ButtonStyled type="submit">Log In</ButtonStyled>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
