import classNames from 'classnames';
import './Specifications.scss';

type SpecificationsProps = {
  items?: Array<{
    key: string,
    value: string,
    isWide: boolean
  }>
}

const Specifications = (props: SpecificationsProps) => {
  const {
    items = []
  } = props;

  return (
    <div className='specifications'>
      <dl className="specifications__list">
        {items.map(({ key, value, isWide }, index) => (
          <div
            className={classNames('specifications__item', {
              'specifications__item--wide': isWide
            })}
            key={index}
          >
            <dt className="specifications__key">{key}</dt>
            <dd className="specifications__value">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default Specifications;
