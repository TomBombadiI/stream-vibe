import { Image } from 'minista';
import './PersonCard.scss';

type PersonCardProps = {
  imgSrc?: string,
  imgAlt?: string,
}

const PersonCard = (props: PersonCardProps) => {
  const {
    imgSrc,
    imgAlt
  } = props;

  return (
    <div className="person-card">
      <Image
        className='person-card__image'
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      />
    </div>
  )
}

export default PersonCard;
