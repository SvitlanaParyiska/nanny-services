import { Formik, Field } from 'formik';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { loginSchema } from '../../helpers/validationSchemas';
import { ErrorMessage } from 'formik';
import {
  ButtonWrapper,
  ErrorText,
  FormWrapper,
  IconPasswordWrapper,
  InputWrapper,
  SvgPasswordIcon,
} from './LoginForm.styled';
import Button from 'components/Button';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm({ handleModalToggle }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const passwordIcon = showPassword ? 'icon-eye' : 'icon-eye-off';

  const handleSubmit = ({ email, password }, actions) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        actions.resetForm();
      })
      .catch(error => console.log(error));

    handleModalToggle();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({ handleSubmit }) => (
        <form>
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
          <ButtonWrapper>
            <Button
              padding={'16px 194px'}
              text={'Log In'}
              type={'submit'}
              color={'#103931'}
              handleClick={handleSubmit}
            />
          </ButtonWrapper>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
