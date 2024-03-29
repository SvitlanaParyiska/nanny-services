import MakeOrderForm from 'components/MakeOrderForm';
import { NannyInfoBox, Text, Title, Wrapper } from './ModalMakeOrder.styled';

function ModalMakeOrder({ handleModalToggle, avatar, name }) {
  return (
    <Wrapper>
      <Title>
        Make an appointment <br />
        with a babysitter
      </Title>
      <Text>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </Text>
      <NannyInfoBox>
        <img src={avatar} alt="nanny"></img>
        <div>
          <p>Your nanny</p>
          <h4>{name}</h4>
        </div>
      </NannyInfoBox>
      <MakeOrderForm handleModalToggle={handleModalToggle} />
    </Wrapper>
  );
}

export default ModalMakeOrder;
