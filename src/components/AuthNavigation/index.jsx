import Button from 'components/Button';
import { AuthBox } from './AuthNavigation.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { removeUser } from '../../redux/authSlice';
import toast from 'react-hot-toast';
import ModalLogIn from 'components/Modals/ModalLogIn';
import BasicModal from 'components/Modals/BasicModal';
import ModalRegistr from 'components/Modals/ModalRegistr';
import UserIcon from 'components/UserIcon';

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
    signOut(auth)
      .then(() => toast.success('You have successfully logged out'))
      .catch(error => console.log(error));
    dispatch(removeUser());
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
