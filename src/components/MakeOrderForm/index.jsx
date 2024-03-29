import toast from 'react-hot-toast';
import { makeOrderSchema } from '../../helpers/validationSchemas';
import { ErrorMessage, Field, Formik } from 'formik';
import {
  Box,
  ButtonStyled,
  ErrorText,
  FieldStyled,
  InputAria,
} from './MakeOrderForm.styled';

function MakeOrderForm({ handleModalToggle }) {
  const initialValues = {
    address: '',
    phone: '',
    childAge: '',
    time: '',
    parents: '',
    email: '',
    comment: '',
  };

  const handleSubmit = e => {
    toast.success(`Your order was create successful!  `, {
      duration: 4000,
      position: 'top-right',
    });
    handleModalToggle();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={makeOrderSchema}
    >
      {({ handleSubmit }) => (
        <form>
          <Box>
            <label>
              <Field name="address" placeholder="Address" type="text" />
              <ErrorMessage name="address" component={ErrorText} />
            </label>
            <label>
              <Field name="phone" placeholder="+380" type="number" />
              <ErrorMessage name="phone" component={ErrorText} />
            </label>
            <label>
              <Field name="childAge" placeholder="Child's age" type="number" />
              <ErrorMessage name="childAge" component={ErrorText} />
            </label>
            <label>
              <Field name="time" placeholder="00:00" type="time" />
              <ErrorMessage name="time" component={ErrorText} />
            </label>
          </Box>
          <label>
            <FieldStyled
              name="parents"
              placeholder="Father's or mother's name"
              type="text"
            />
            <ErrorMessage name="parents" component={ErrorText} />
          </label>

          <label>
            <FieldStyled
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <ErrorMessage name="email" component={ErrorText} />
          </label>
          <label>
            <InputAria name="comment" placeholder="Comment" />
          </label>
          <ButtonStyled type="submit">Send</ButtonStyled>
        </form>
      )}
    </Formik>
  );
}

export default MakeOrderForm;
