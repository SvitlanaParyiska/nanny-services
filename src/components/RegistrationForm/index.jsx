import { Formik, Field } from 'formik';
import { ErrorMessage } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { registrationSchema } from '../../helpers/validationSchemas';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import Button from 'components/Button';
import {
  ButtonWrapper,
  ErrorText,
  FormWrapper,
  IconPasswordWrapper,
  InputWrapper,
  SvgPasswordIcon,
} from './RegistrationForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function RegistrationForm({ handleModalToggle }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const passwordIcon = showPassword ? 'icon-eye' : 'icon-eye-off';

  const handleSubmit = ({ email, password }, actions) => {
    createUserWithEmailAndPassword(auth, email, password)
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
      validationSchema={registrationSchema}
    >
      {({ handleSubmit }) => (
        <form>
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
          <ButtonWrapper>
            <Button
              padding={'16px 186px'}
              text={'Sign Up'}
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

export default RegistrationForm;
