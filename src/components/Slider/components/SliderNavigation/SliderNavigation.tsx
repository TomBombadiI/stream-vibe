import './SliderNavigation.scss';
import classNames from 'classnames';
import Button from '@/components/Button';

type SliderNavigationProps = {
    className?: string,
    id?: string,
    hasPagination?: false,
    mode?: '' | 'tile',
    position?: '' | 'abs-bottom',
    isHiddenMobile?: boolean,
}

const SliderNavigation = (props: SliderNavigationProps) => {
    const {
        className,
        id,
        hasPagination = true,
        mode = '',
        position = '',
        isHiddenMobile = false
    } = props;

    return (
        <div
            className={classNames(className, 'slider-navigation', {
                [`slider-navigation--${mode}`]: mode,
                [`slider-navigation--${position}`]: position,
                ['hidden-mobile']: isHiddenMobile,
            })}
            id={id}
            data-js-slider-navigation=""
        >
            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
                mode="black10"
                iconName="arrow-left"
                label="Previous Slide"
                isLabelVisible={false}
                extraAttrs={{
                    'data-js-slider-previous-button': '',
                }}
            />

            {hasPagination && (
                <div
                    className='slider-navigation__pagination'
                    data-js-slider-pagination=""
                />
            )}

            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
                mode="black10"
                iconName="arrow-right"
                label="Next Slide"
                isLabelVisible={false}
                extraAttrs={{
                    'data-js-slider-next-button': '',
                }}
            />
        </div>
    );
}

export default SliderNavigation;
