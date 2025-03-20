import classNames from 'classnames';
import './AccordionGroup.scss';

const AccordionGroup = (props: any) => {
    const {
        columns = 1,
        children,
        isOrderedList = true
    } = props;

    const itemsPerColumn = Math.ceil(children.length / columns);
    const ListTag = isOrderedList ? 'ol' : 'ul';

    return (
        <ListTag
            className={classNames('accordion-group', {
                [`accordion-group--${columns}-columns`]: columns > 1,
                'accordion-group--has-counter': isOrderedList
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
