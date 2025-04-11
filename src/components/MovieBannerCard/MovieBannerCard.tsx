import { Image } from 'minista';
import './MovieBannerCard.scss';
import Button from '../Button';
import classNames from 'classnames';

type MovieBannerCard = {
  TitleTag?: keyof JSX.IntrinsicElements,
  title?: string,
  titleId?: string,
  description?: string,
  imageSrc?: string,
  isSmallPaddingY?: boolean
}

const MovieBannerCard = (props: MovieBannerCard) => {
  const {
    TitleTag = 'h2',
    title,
    titleId,
    description,
    imageSrc,
    isSmallPaddingY = false,
  } = props;

  return (
    <div className='movie-banner-card'>
      <Image
        className='movie-banner-card__image'
        src={imageSrc}
      />

      <div className={classNames('movie-banner-card__inner', {
        'movie-banner-card__inner--small-padding-y': isSmallPaddingY
      })}>
        <div className="movie-banner-card__body">
          <TitleTag
            className="movie-banner-card__title h3"
            id={titleId}
          >
            {title}
          </TitleTag>
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
