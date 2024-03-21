import RegistrationForm from 'components/RegistrationForm';
import { FormWrapper, Text, Title } from './ModalRegistr.styled';

function ModalRegistr({ handleModalToggle }) {
  return (
    <FormWrapper>
      <Title>Registration</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Text>
      <RegistrationForm handleModalToggle={handleModalToggle} />
    </FormWrapper>
  );
}
export default ModalRegistr;
