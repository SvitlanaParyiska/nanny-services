import {
  AgeBox,
  ButtonMake,
  ButtonReadMore,
  CharactersBox,
  IconFavAdd,
  IconLoc,
  IconRating,
  ImageBorder,
  ItemStyled,
  LocationThumb,
  NameBox,
  NannyAboutText,
  RatingStyled,
  ReviewsList,
  Thumb,
} from './NanniesItem.styled';
import sprite from '../../images/sprite.svg';
import { countAge } from 'helpers/nannyHelpers';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ReviewItem from 'components/ReviewItem';
import ModalMakeOrder from 'components/Modals/ModalMakeOrder';
import BasicModal from 'components/Modals/BasicModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, selectIsLoggedIn } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/nannySlice';
import toast from 'react-hot-toast';

function NanniesItem({ item }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const favArray = useSelector(selectFavorites);
  const isFavorite = favArray.find(nanny => nanny.name === item.name);
  const [isReadMore, setIsReadMore] = useState(false);
  const [modalMakeOr, setModalMakeOr] = useState(false);

  const heartIcon = isFavorite ? 'icon-heart-color' : 'icon-heart';

  const handleModalMakeOrder = () => {
    setModalMakeOr(state => !state);
  };

  const handleFav = () => {
    if (!isLoggedIn) {
      toast.error('Please login to this operation!', {
        timeout: 2000,
      });
      return;
    }
    if (isFavorite) {
      dispatch(removeFavorite(item.name));
      toast.success('Nanny was successful deleted!', {
        timeout: 2000,
      });
    } else {
      dispatch(addFavorite(item));
      toast.success('Nanny was successful added!', {
        timeout: 2000,
      });
    }
  };

  return (
    <ItemStyled>
      <ImageBorder>
        <img src={item.avatar_url} alt="nanny" />
      </ImageBorder>
      <IconFavAdd aria-label="heart" onClick={handleFav}>
        <use href={`${sprite}#${heartIcon}`} />
      </IconFavAdd>
      <Thumb>
        <NameBox>
          <div>
            <p>Nanny</p>
            <h3>{item.name}</h3>
          </div>

          <LocationThumb>
            <div>
              <IconLoc aria-label="location">
                <use href={`${sprite}#icon-map-pin`} />
              </IconLoc>
              <p>{item.location}</p>
            </div>
            <RatingStyled>
              <IconRating aria-label="rating">
                <use href={`${sprite}#icon-star`} />
              </IconRating>
              <p>Rating: {item.rating}</p>
            </RatingStyled>
            <p>
              Price / 1 hour: <span>{item.price_per_hour}$</span>
            </p>
          </LocationThumb>
        </NameBox>
        <AgeBox>
          <li>
            Age <span> {Math.floor(countAge(item.birthday))}</span>
          </li>
          <li>
            Experience:
            <span> {item.experience}</span>
          </li>
          <li>
            Kids Age:
            <span> {item.kids_age}</span>
          </li>
        </AgeBox>
        <CharactersBox>
          <li>
            Characters:{' '}
            <span>
              {item.characters
                .map(
                  word =>
                    word.toString().charAt(0).toUpperCase() + word.slice(1)
                )
                .join(', ')}
            </span>
          </li>
          <li>
            Education:
            <span> {item.education}</span>
          </li>
        </CharactersBox>
        <NannyAboutText>{item.about}</NannyAboutText>
        {!isReadMore ? (
          <ButtonReadMore onClick={() => setIsReadMore(true)}>
            Read More
          </ButtonReadMore>
        ) : (
          <>
            <ReviewsList>
              {item.reviews.map(review => (
                <ReviewItem review={review} key={nanoid()} />
              ))}
            </ReviewsList>
            <ButtonMake onClick={handleModalMakeOrder}>
              Make an appointment
            </ButtonMake>
          </>
        )}
      </Thumb>
      {modalMakeOr && (
        <BasicModal handleModalToggle={handleModalMakeOrder}>
          <ModalMakeOrder
            handleModalToggle={handleModalMakeOrder}
            name={item.name}
            avatar={item.avatar_url}
          />
        </BasicModal>
      )}
    </ItemStyled>
  );
}

export default NanniesItem;
