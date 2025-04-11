import Badge from '../Badge';
import RatingView from '../RatingView';
import './ReviewCard.scss';

type ReviewCardProps = {
  name?: string,
  subtitle?: string,
  description?: string,
  ratingValue?: number
}

const ReviewCard = (props: ReviewCardProps) => {
  const {
    name,
    subtitle,
    description,
    ratingValue
  } = props;

  return (
    <div className="review-card">
      <header className="review-card__header">
        <div className="review-card__author">
          <h4 className="review-card__name h6">{name}</h4>
          <p className="review-card__subtitle">{subtitle}</p>
        </div>
        <Badge>
          <RatingView
            value={ratingValue}
            label={ratingValue.toString()}
          />
        </Badge>
      </header>
      <div className="review-card__body">
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ReviewCard;
