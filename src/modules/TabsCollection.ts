import getParams from "@/utils/getParams";

const rootSelector = '[data-js-tabs]';

class Tabs {
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
    activeButtonWidth: '--tabsActiveButtonWidth',
    activeButtonOffsetLeft: '--tabsActiveButtonOffsetLeft'
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
    this.rootElement = rootElement;
    this.params = getParams(this.rootElement, this.selectors.root);
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation);

    this.buttonElements = [...this.navigationElement.querySelectorAll<HTMLElement>(this.selectors.button)];
    this.contentElements = [...this.rootElement.querySelectorAll<HTMLElement>(this.selectors.content)];
    this.state = {
      activeTabIndex: this.buttonElements.findIndex(({ ariaSelected }) => ariaSelected)
    }
    this.limitTabIndex = this.buttonElements.length - 1;

    this.bindEvents();
  }

  updateUI = () => {
    const { activeTabIndex } = this.state;

    this.buttonElements.forEach((buttonElement: HTMLElement, index: number) => {
      const isActive = index === activeTabIndex;

      buttonElement.classList.toggle(this.stateClasses.isActive, isActive);
      buttonElement.ariaSelected = isActive.toString();
      buttonElement.tabIndex = isActive ? 0 : -1;
    });

    this.contentElements.forEach((contentElement: HTMLElement, index: number) => {
      const isActive = index === activeTabIndex;

      contentElement.classList.toggle(this.stateClasses.isActive, isActive);
    })
  }

  activateTab = (newTabIndex: number) => {
    this.state.activeTabIndex = newTabIndex;
    this.updateUI();
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
