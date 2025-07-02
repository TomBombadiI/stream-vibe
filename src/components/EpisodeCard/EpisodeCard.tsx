import Icon from '../Icon';
import './EpisodeCard.scss';

type EpisodeCardProps = {
  number: string,
  title: string,
  description: string,
  duration: string,
  video: {
    src: string,
    poster: string,
  }
}

const EpisodeCard = (props: EpisodeCardProps) => {
  const {
    number,
    title,
    description,
    duration,
    video
  } = props;

  const playButtonLabel = 'Play';

  return (
    <div className='episode-card'>
      <div className="episode-card__number">
        {number}
      </div>
      <div className="episode-card__player" data-js-video-player="">
        <video
          src={video.src}
          poster={video.poster}
          className="episode-card__video"
          width={172}
          height={118}
          data-js-video-player-video=""
        />
        <button
          className="episode-card__play-button is-active"
          type="button"
          aria-label={playButtonLabel}
          title={playButtonLabel}
          data-js-video-player-play-button=""
        >
          <Icon name='play-circle' />
        </button>
      </div>
      <div className="episode-card__body">
        <div className="episode-card__info">
          <h4 className="episode-card__title h6">{title}</h4>
          <div className="episode-card__duration">
            <Icon name='clock_stroke' ariaLabel="Duration" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="episode-card__description hidden-mobile">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default EpisodeCard;
