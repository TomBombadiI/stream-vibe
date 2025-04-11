import './SliderNavigation.scss';
import classNames from 'classnames';
import Button from '@/components/Button';

type SliderNavigationProps = {
    className?: string,
    id?: string,
    hasPagination?: false,
    mode?: '' | 'tile' | 'rounded',
    position?: '' | 'abs-bottom',
    isHiddenMobile?: boolean,
    buttonMode?: 'black10' | 'black08'
}

const SliderNavigation = (props: SliderNavigationProps) => {
    const {
        className,
        id,
        hasPagination = true,
        mode = '',
        position = '',
        isHiddenMobile = false,
        buttonMode = 'black10'
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
                mode={buttonMode}
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
                mode={buttonMode}
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
