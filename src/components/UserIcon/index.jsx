import { useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { UserIconBox, IconUserStyled } from './UserIcon.styled';
import { selectUser } from '../../redux/selectors';

function UserIcon() {
  const user = useSelector(selectUser);

  return (
    <UserIconBox>
      <div>
        <IconUserStyled>
          <use href={`${sprite}#icon-mdi_user`} />
        </IconUserStyled>
      </div>
      <p>{user.name}</p>
    </UserIconBox>
  );
}

export default UserIcon;
