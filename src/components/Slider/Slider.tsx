import 'swiper/css';
import './Slider.scss';
import SliderNavigation from './components/SliderNavigation'
import classNames from 'classnames';

const defaultSliderParams = {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        481: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            loop: true,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
            loop: true,
        },
        1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
            loop: true,
            allowTouchMove: false,
        },
        1441: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 30,
            loop: true,
            allowTouchMove: false,
        }
    }
};

type SliderProps = {
    children?: any,
    navigationTargetElementId?: string,
    sliderParams?: any,
    isBeyondTheViewportOnMobileS?: boolean,
    hasScrollbarOnMobile?: boolean,
    navigationPosition?: '' | 'abs-bottom',
    isNavigationHiddenMobile?: boolean,
    navigationMode?: '' | 'tile' | 'rounded',
    navigationJustifyContent?: 'space-between' | 'center',
}

const Slider = (props: SliderProps) => {
    const {
        children,
        navigationTargetElementId = null,
        sliderParams = defaultSliderParams,
        isBeyondTheViewportOnMobileS,
        hasScrollbarOnMobile = true,
        navigationPosition = '',
        isNavigationHiddenMobile = true,
        navigationMode = "",
        navigationJustifyContent
    } = props;

    return (
        <div
            className={classNames('slider', {
                'slider--beyond-the-viewport-on-mobile-s': isBeyondTheViewportOnMobileS
            })}
            data-js-slider={JSON.stringify({ sliderParams, navigationTargetElementId })}
        >
            <div className="slider__swiper swiper" data-js-slider-swiper="">
                <ul className="slider__list swiper-wrapper">
                    {children.map((slide, index) => (
                        <li className="slider__item swiper-slide" key={index}>
                            {slide}
                        </li>
                    ))}
                </ul>
            </div>

            {!navigationTargetElementId && (
                <SliderNavigation
                    mode={navigationMode}
                    className='slider__navigation'
                    position={navigationPosition}
                    isHiddenMobile={isNavigationHiddenMobile}
                    justifyContent={navigationJustifyContent}
                />
            )}

            {hasScrollbarOnMobile && (
                <div
                    className='slider__scrollbar visible-mobile'
                    data-js-slider-scrollbar=""
                >

                </div>
            )}
        </div>
    )
}

export default Slider;
