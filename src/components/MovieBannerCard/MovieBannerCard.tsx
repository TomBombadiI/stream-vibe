import { Image } from 'minista';
import './MovieBannerCard.scss';
import Button from '../Button';

const MovieBannerCard = (props: any) => {
  const {
    title,
    description,
    imageSrc
  } = props;

  return (
    <div className='movie-banner-card'>
      <Image
        className='movie-banner-card__image'
        src={imageSrc}
      />

      <div className="movie-banner-card__inner">
        <div className="movie-banner-card__body">
          <h2 className="movie-banner-card__title h3">
            {title}
          </h2>
          <div className="movie-banner-card__description hidden-mobile">
            <p>
              {description}
            </p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="play"
            label="Play now"
            hasFillIcon={true}
          />
          <div className="movie-banner-card__actions">
            <Button
              iconName="plus"
              label="add to play list"
              isLabelVisible={false}
              mode='black06'
            />
            <Button
              iconName="like"
              label="Like"
              isLabelVisible={false}
              mode='black06'
            />
            <Button
              iconName="volume"
              label="Mute"
              isLabelVisible={false}
              mode='black06'
            />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard;
