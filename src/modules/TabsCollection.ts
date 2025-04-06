import getParams from "@/utils/getParams";
import pxToRem from "@/utils/pxToRem";
import BaseComponent from "./generic/BaseComponent";

const rootSelector = '[data-js-tabs]';

class Tabs extends BaseComponent {
  selectors = {
    root: rootSelector,
    navigation: '[data-js-tabs-navigation]',
    button: '[data-js-tabs-button]',
    content: '[data-js-tabs-content]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  stateCssVariables = {
    activeButtonWidth: '--tabsNavigationActiveButtonWidth',
    activeButtonOffsetLeft: '--tabsNavigationActiveButtonOffsetLeft'
  }

  rootElement: HTMLElement;
  navigationElement: HTMLElement;
  buttonElements: HTMLElement[];
  contentElements: HTMLElement[];
  params: any;
  state: {
    activeTabIndex: number,
  };
  limitTabIndex: number;


  constructor(rootElement: HTMLElement) {
    super();

    this.rootElement = rootElement;
    this.params = getParams(this.rootElement, this.selectors.root);
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation);

    this.buttonElements = [...this.navigationElement.querySelectorAll<HTMLElement>(this.selectors.button)];
    this.contentElements = [...this.rootElement.querySelectorAll<HTMLElement>(this.selectors.content)];
    this.state = this.getProxyState({
      activeTabIndex: this.buttonElements.findIndex(({ ariaSelected }) => ariaSelected)
    })
    this.limitTabIndex = this.buttonElements.length - 1;

    this.bindEvents();
    setTimeout(this.bindObservers, 500);
  }

  updateUI = () => {
    const { activeTabIndex } = this.state;

    this.buttonElements.forEach((buttonElement: HTMLElement, index: number) => {
      const isActive = index === activeTabIndex;

      buttonElement.classList.toggle(this.stateClasses.isActive, isActive);
      buttonElement.ariaSelected = isActive.toString();
      buttonElement.tabIndex = isActive ? 0 : -1;

      if (isActive) {
        this.updateNavigationCSSVariables(buttonElement);
      }
    });

    this.contentElements.forEach((contentElement: HTMLElement, index: number) => {
      const isActive = index === activeTabIndex;

      contentElement.classList.toggle(this.stateClasses.isActive, isActive);
    });
  }

  updateNavigationCSSVariables = (
    activeButtonElement: HTMLElement = this.buttonElements[this.state.activeTabIndex]
  ) => {
    const { width, left } = activeButtonElement.getBoundingClientRect();
    const offsetLeft = left - this.navigationElement.getBoundingClientRect().left;

    this.navigationElement.style.setProperty(
      this.stateCssVariables.activeButtonWidth,
      `${pxToRem(width)}rem`,
    );

    this.navigationElement.style.setProperty(
      this.stateCssVariables.activeButtonOffsetLeft,
      `${pxToRem(offsetLeft)}rem`,
    );
  }

  activateTab = (newTabIndex: number) => {
    this.state.activeTabIndex = newTabIndex;
    this.buttonElements[newTabIndex].focus();
  }

  previousTab = () => {
    const newTabIndex = this.state.activeTabIndex === 0
      ? this.limitTabIndex
      : this.state.activeTabIndex - 1;

    this.activateTab(newTabIndex);
  }

  nextTab = () => {
    const newTabIndex = this.state.activeTabIndex === this.limitTabIndex
      ? 0
      : this.state.activeTabIndex + 1;

    this.activateTab(newTabIndex);
  }

  firstTab = () => {
    this.activateTab(0);
  }

  lastTab = () => {
    this.activateTab(this.limitTabIndex);
  }

  onButtonClick = (buttonIndex: number) => {
    this.activateTab(buttonIndex);
  }

  onKeyDown = (event: KeyboardEvent) => {
    const { target, code, metaKey } = event;

    if (!(target instanceof HTMLElement)) return;

    const isTabsContentFocused = this.contentElements
      .some((contentElement: HTMLElement) => contentElement === target);
    const isTabsButtonFocused = this.buttonElements
      .some((buttonElement: HTMLElement) => buttonElement === target);

    if (!isTabsContentFocused && !isTabsButtonFocused) {
      return;
    }

    const action = {
      ArrowLeft: this.previousTab,
      ArrowRight: this.nextTab,
      Home: this.firstTab,
      End: this.lastTab,
    }[code];

    const isMacHomeKey = metaKey && code === 'ArrowLeft';
    if (isMacHomeKey) {
      event.preventDefault();
      this.firstTab();
      return;
    }

    const isMacEndKey = metaKey && code === 'ArrowRight';
    if (isMacEndKey) {
      event.preventDefault();
      this.lastTab();
      return;
    }

    if (action) {
      event.preventDefault();
      action();
    }
  }

  bindEvents = () => {
    this.buttonElements.forEach((buttonElement: HTMLElement, index: number) => {
      buttonElement.addEventListener('click', () => this.onButtonClick(index));
    });

    document.addEventListener('keydown', this.onKeyDown);
  }

  onResize = () => {
    this.updateNavigationCSSVariables();
  }

  bindObservers = () => {
    const resizeObserver = new ResizeObserver(this.onResize);

    resizeObserver.observe(this.navigationElement);
  }
}

class TabsCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element: HTMLElement) => {
      new Tabs(element);
    })
  }
}

export default TabsCollection;
