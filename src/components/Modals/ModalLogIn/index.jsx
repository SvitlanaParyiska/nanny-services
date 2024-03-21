import LoginForm from 'components/LoginForm';
import { Text, Title, Wrapper } from './ModalLogIn.styled';

function ModalLogIn({ handleModalToggle }) {
  return (
    <Wrapper>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>
      <LoginForm handleModalToggle={handleModalToggle} />
    </Wrapper>
  );
}

export default ModalLogIn;
