import { Formik, Field } from 'formik';
import { ErrorMessage } from 'formik';
import { registrationSchema } from '../../helpers/validationSchemas';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import {
  ButtonStyled,
  ErrorText,
  FormWrapper,
  IconPasswordWrapper,
  InputWrapper,
  SvgPasswordIcon,
} from './RegistrationForm.styled';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/authOperations';

function RegistrationForm({ handleModalToggle }) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const passwordIcon = showPassword ? 'icon-eye' : 'icon-eye-off';

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(registration(values));
        actions.resetForm();
        handleModalToggle();
      }}
      validationSchema={registrationSchema}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <FormWrapper>
            <InputWrapper>
              <label>
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component={ErrorText} />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <Field type="email" name="email" placeholder=" Email" />
                <ErrorMessage name="email" component={ErrorText} />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder=" Password"
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
          <ButtonStyled type="submit">Sign up</ButtonStyled>
        </form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
