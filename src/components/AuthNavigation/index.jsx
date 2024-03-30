import Button from 'components/Button';
import { AuthBox } from './AuthNavigation.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import ModalLogIn from 'components/Modals/ModalLogIn';
import BasicModal from 'components/Modals/BasicModal';
import ModalRegistr from 'components/Modals/ModalRegistr';
import UserIcon from 'components/UserIcon';
import { logOut } from '../../redux/authOperations';

function AuthNavigation() {
  const [modalRegistration, setModalRegistration] = useState(false);
  const [modalLogIn, setModalLogIn] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleModalRegistration = () => {
    setModalRegistration(state => !state);
  };

  const handleModalLogIn = () => {
    setModalLogIn(state => !state);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <AuthBox>
      {isLoggedIn ? (
        <>
          <UserIcon />
          <Button
            type={'button'}
            padding={'13px 39px'}
            color={''}
            text={'Log out'}
            handleClick={handleLogOut}
          />
        </>
      ) : (
        <>
          <Button
            type={'button'}
            padding={'13px 39px'}
            color={''}
            text={'Log In'}
            handleClick={handleModalLogIn}
          />
          <Button
            type={'button'}
            padding={'13px 40px'}
            color={'#103931'}
            text={'Registration'}
            handleClick={handleModalRegistration}
          />
        </>
      )}
      {modalRegistration && (
        <BasicModal handleModalToggle={handleModalRegistration}>
          <ModalRegistr handleModalToggle={handleModalRegistration} />
        </BasicModal>
      )}
      {modalLogIn && (
        <BasicModal handleModalToggle={handleModalLogIn}>
          <ModalLogIn handleModalToggle={handleModalLogIn} />
        </BasicModal>
      )}
    </AuthBox>
  );
}

export default AuthNavigation;
