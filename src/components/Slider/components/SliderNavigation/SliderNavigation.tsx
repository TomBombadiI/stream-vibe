import './SliderNavigation.scss';
import classNames from 'classnames';
import Button from '@/components/Button';

type SliderNavigationProps = {
    className?: string,
    id?: string,
    hasPagination?: false,
    mode?: '' | 'tile'
}

const SliderNavigation = (props: SliderNavigationProps) => {
    const {
        className,
        id,
        hasPagination,
        mode = ''
    } = props;

    return (
        <div
            className={classNames(className, 'slider-navigation', {
                [`slider-navigation--${mode}`]: mode,
            })}
            id={id}
        >
            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
                mode="black10"
                iconName="arrow-left"
                label="Previous Slide"
                isLabelVisible={false}
            />

            {hasPagination && (
                <div
                    className='slide-navigation__pagination'
                />
            )}

            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
                mode="black10"
                iconName="arrow-right"
                label="Next Slide"
                isLabelVisible={false}
            />
        </div>
    );
}

export default SliderNavigation;
