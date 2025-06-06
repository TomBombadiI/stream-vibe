import { Image } from 'minista';
import './PersonCard.scss';

type PersonCardProps = {
  imgSrc?: string,
  imgAlt?: string,
  name?: string,
  subtitle?: string,
}

const PersonCard = (props: PersonCardProps) => {
  const {
    imgSrc,
    imgAlt,
    name,
    subtitle
  } = props;

  const hasBody = Boolean(name || subtitle);

  return (
    <div className="person-card">
      <Image
        className='person-card__image'
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      />
      {hasBody && (
        <div className="person-card__body">
          {name && (
            <h4 className="person-card__name">{name}</h4>
          )}
          {subtitle && (
            <p className="person-card__subtitle">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default PersonCard;
