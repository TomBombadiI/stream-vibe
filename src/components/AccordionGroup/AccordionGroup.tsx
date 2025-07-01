import classNames from 'classnames';
import './AccordionGroup.scss';

type AccordionGroupProps = {
  className?: string,
  mode?: 'dark',
  columns?: number,
  children: any,
  isOrderedList?: boolean
}

const AccordionGroup = (props: AccordionGroupProps) => {
  const {
    className,
    mode = null,
    columns = 1,
    children,
    isOrderedList = true
  } = props;

  const itemsPerColumn = Math.ceil(children.length / columns);
  const ListTag = isOrderedList ? 'ol' : 'ul';

  return (
    <ListTag
      className={classNames(className, 'accordion-group', {
        [`accordion-group--${columns}-columns`]: columns > 1,
        'accordion-group--has-counter': isOrderedList,
        [`accordion-group--${mode}`]: mode,
      })}
    >
      {children.map((child, index) => (
        <li
          className={classNames('accordion-group__item', {
            'accordion-group__item--last-column-item': columns > 1 && (index + 1) % itemsPerColumn === 0
          })}
          key={index}
        >
          {child}
        </li>
      ))}
    </ListTag>
  )
}

export default AccordionGroup;
