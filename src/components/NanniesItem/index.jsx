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
  LocationBox,
  LocationThumb,
  NameBox,
  NannyAboutText,
  RatingStyled,
  ReviewsList,
  Thumb,
} from './NanniesItem.styled';
import sprite from '../../images/sprite.svg';
import { countAge } from 'helpers/nannyHelpers';
// import { selectItems } from '../../redux/selectors';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ReviewItem from 'components/ReviewItem';
import ModalMakeOrder from 'components/Modals/ModalMakeOrder';
import BasicModal from 'components/Modals/BasicModal';

// const heartIcon = isFavorite ? 'icon-heart-color' : 'icon-heart';

function NanniesItem({ item }) {
  const [isReadMore, setIsReadMore] = useState(false);
  const [modalMakeOr, setModalMakeOr] = useState(false);

  const handleModalMakeOrder = () => {
    setModalMakeOr(state => !state);
  };

  return (
    <ItemStyled>
      <ImageBorder>
        <img src={item.avatar_url} alt="nanny" />
      </ImageBorder>
      <Thumb>
        <NameBox>
          <div>
            <p>Nanny</p>
            <h3>{item.name}</h3>
          </div>
          <LocationBox>
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
            <IconFavAdd aria-label="heart">
              <use href={`${sprite}#icon-heart`} />
            </IconFavAdd>
          </LocationBox>
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
            {' '}
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
