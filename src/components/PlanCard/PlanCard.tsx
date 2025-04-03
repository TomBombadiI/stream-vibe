import Button from '../Button';
import './PlanCard.scss';

const PlanCard = (props: any) => {
  const {
    title,
    description,
    price,
  } = props;

  return (
    <div className='plan-card'>
      <div className="plan-card__info">
        <h3 className="plan-card__title h4">{title}</h3>
        <div className="plan-card__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="plan-card__conditions">
        <span className="plan-card__price">{price.value}</span>
        <div className="plan-card__period">{price.label}</div>
      </div>
      <div className="plan-card__actions">
        <Button
          label="Start Free Trial"
          href="/subscriptions"
          mode="black08"
        />
        <Button
          label="Choose Plan"
          href="/subscriptions"
        />
      </div>

    </div>
  );
}

export default PlanCard;
