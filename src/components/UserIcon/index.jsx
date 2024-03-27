import sprite from '../../images/sprite.svg';
import { UserIconBox, IconUserStyled } from './UserIcon.styled';

function UserIcon() {
  return (
    <UserIconBox>
      <div>
        <IconUserStyled>
          <use href={`${sprite}#icon-mdi_user`} />
        </IconUserStyled>
      </div>
      <p>Ilona</p>
    </UserIconBox>
  );
}

export default UserIcon;
