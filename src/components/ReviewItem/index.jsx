import {
  IconRating,
  IconReviwer,
  ItemStyled,
  RatingBox,
  RatingIconBox,
} from './ReviewItem.styled';
import sprite from '../../images/sprite.svg';

function ReviewItem({ review }) {
  return (
    <ItemStyled>
      <div>
        <IconReviwer>
          <p>{review.reviewer[0]}</p>
        </IconReviwer>
        <RatingBox>
          <h4>{review.reviewer}</h4>
          <RatingIconBox>
            <IconRating aria-label="rating">
              <use href={`${sprite}#icon-star`} />
            </IconRating>
            <p>{review.rating}</p>
          </RatingIconBox>
        </RatingBox>
      </div>
      <p>{review.comment}</p>
    </ItemStyled>
  );
}

export default ReviewItem;
