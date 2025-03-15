import getParams from "@/utils/getParams";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const rootSelector = '[data-js-slider]';

class Slider {
    selectors: {
        root: string,
        swiper: string,
        navigation: string,
        previousButton: string,
        nextButton: string,
        pagination: string,
    } = {
            root: rootSelector,
            swiper: '[data-js-slider-swiper]',
            navigation: '[data-js-slider-navigation]',
            previousButton: '[data-js-slider-previous-button]',
            nextButton: '[data-js-slider-next-button]',
            pagination: '[data-js-slider-pagination]',
        }

    rootElement: HTMLElement;
    swiperElement: HTMLElement;
    navigationElement: HTMLElement;
    previousButtonElement: HTMLElement;
    nextButtonElement: HTMLElement;
    paginationElement: HTMLElement;

    params: {
        navigationTargetElementId?: string,
        sliderParams: {
            sliderPerGroup?: number,
            slidesPerView?: number,
            spaceBetween?: number,
        }
    };

    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;
        this.swiperElement = this.rootElement.querySelector(this.selectors.swiper);
        this.params = getParams(this.rootElement, this.selectors.root);
        this.navigationElement = this.params.navigationTargetElementId ?
            document.getElementById(this.params.navigationTargetElementId) :
            this.rootElement.querySelector(this.selectors.navigation);
        this.previousButtonElement = this.navigationElement.querySelector(this.selectors.previousButton);
        this.nextButtonElement = this.navigationElement.querySelector(this.selectors.nextButton);
        this.paginationElement = this.navigationElement.querySelector(this.selectors.pagination);

        this.init();
    }

    init() {
        new Swiper(
            this.swiperElement,
            {
                ...this.params.sliderParams,
                modules: [Navigation, Pagination],
                navigation: {
                    prevEl: this.previousButtonElement,
                    nextEl: this.nextButtonElement,
                },
                pagination: {
                    el: this.paginationElement,
                    bulletClass: 'slider-navigation__pagination-bullet',
                    bulletActiveClass: 'is-active',
                }
            });
    }
}

class SliderCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element: HTMLElement) => {
            new Slider(element);
        });
    }
}

export default SliderCollection;
