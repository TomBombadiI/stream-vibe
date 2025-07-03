import RatingView from '../RatingView';
import './Ratings.scss';



type RatingsItem = {
  title: string,
  ratingValue: number,
}

type RatingsProps = {
  items: RatingsItem[],
}

const Ratings = (props: RatingsProps) => {
  const {
    items = [],
  } = props;

  return (
    <div className="ratings">
      <ul className="ratings__list">
        {items.map(({ title, ratingValue }, index) => (
          <li className="ratings__item" key={index}>
            <h4 className="ratings__title">{title}</h4>
            <RatingView
              value={ratingValue}
              label={ratingValue.toString()}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ratings;
