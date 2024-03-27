import toast from 'react-hot-toast';
import { makeOrderSchema } from '../../helpers/validationSchemas';
import { useFormik } from 'formik';
import {
  ButtonStyled,
  Input,
  InputAria,
  InputBig,
} from './MakeOrderForm.styled';

function MakeOrderForm({ handleModalToggle }) {
  const formik = useFormik({
    initialValues: {
      address: '',
      phone: '',
      childAge: '',
      time: '',
      parents: '',
      email: '',
      comment: '',
    },
    validationSchema: makeOrderSchema,

    onSubmit: () => {
      formik.resetForm();
      handleModalToggle();
      toast.success(`Your order was create successful!  `, {
        duration: 4000,
        position: 'top-right',
      });
    },
  });

  return (
    <form onSubmit={formik.onSubmit}>
      <label>
        <Input
          name="address"
          placeholder="Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          $error={formik.touched.address && formik.errors.address}
        />
      </label>
      <label>
        <Input
          name="phone"
          placeholder="+380"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          $error={formik.touched.phone && formik.errors.phone}
        />
      </label>
      <label>
        <Input
          name="childAge"
          placeholder="Child's age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.childAge}
          $error={formik.touched.childAge && formik.errors.childAge}
        />
      </label>
      <label>
        <Input
          name="time"
          placeholder="00:00"
          type="time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.time}
          $error={formik.touched.time && formik.errors.time}
        />
      </label>

      <label>
        <InputBig
          name="parents"
          placeholder="Father's or mother's name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.parents}
          $error={formik.touched.parents && formik.errors.parents}
        />
      </label>

      <label>
        <InputBig
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          $error={formik.touched.email && formik.errors.email}
        />
      </label>

      <label>
        <InputAria
          name="comment"
          placeholder="Comment"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
          $error={formik.touched.comment && formik.errors.comment}
        />
      </label>

      <ButtonStyled type="submit">Send</ButtonStyled>
    </form>
  );
}

export default MakeOrderForm;
