import classNames from 'classnames';
import './Accordion.scss';
import Icon from '../Icon';

type AccordionProps = {
  title: string;
  subtitle?: string;
  id: string;
  name: string;
  isOpen: boolean;
  titleLevelClassName?: string;
  children: React.ReactNode;
  isArrowButton?: boolean;
}

const Accordion = (props: AccordionProps) => {
  const {
    title,
    subtitle,
    id,
    name,
    isOpen,
    titleLevelClassName = 'h5',
    children,
    isArrowButton = false,
  } = props;

  return (
    <div className="accordion">
      <details
        className="accordion__details"
        name={name}
        open={isOpen}
      >
        <summary className="accordion__summary">
          <h3 className={classNames('accordion__title', titleLevelClassName)}>
            <span role='term' aria-details={id}>
              {title}
            </span>
            {subtitle && (
              <span className="accordion__subtitle">
                {subtitle}
              </span>
            )}
            {isArrowButton && (
              <div className="accordion__arrow">
                <Icon name='arrow-down' />
              </div>
            )}
          </h3>
        </summary>
      </details>
      <div id={id} className="accordion__content" role='definition'>
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
