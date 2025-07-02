import MatchMedia from "@/constants/MatchMedia";
import BaseComponent from "./generic/BaseComponent";

const rootSelector = '[data-js-select]';

class Select extends BaseComponent {
  selectors = {
    root: rootSelector,
    originalControl: '[data-js-select-original-control]',
    button: '[data-js-select-button]',
    dropdown: '[data-js-select-dropdown]',
    option: '[data-js-select-option]',
  }

  stateClasses = {
    isExpanded: 'is-expanded',
    isSelected: 'is-selected',
    isCurrent: 'is-current',
    isOnTheLeftSide: 'is-on-the-left-side',
    isOnTheRightSide: 'is-on-the-right-side',
  }

  initalState = {
    isExpanded: false,
    currentOptionIndex: null,
    selectedOptionElement: null,
  }

  rootElement: HTMLElement;
  originalControlElement: HTMLSelectElement;
  buttonElement: HTMLElement;
  dropdownElement: HTMLElement;
  optionElements: HTMLElement[];
  state: {
    isExpanded: boolean;
    currentOptionIndex: number;
    selectedOptionElement: HTMLElement;
  };

  constructor(rootElement: HTMLElement) {
    super();

    this.rootElement = rootElement;
    this.originalControlElement = this.rootElement.querySelector(this.selectors.originalControl) as HTMLSelectElement;
    this.buttonElement = this.rootElement.querySelector(this.selectors.button) as HTMLElement;
    this.dropdownElement = this.rootElement.querySelector(this.selectors.dropdown) as HTMLElement;
    this.optionElements = [...this.rootElement.querySelectorAll(this.selectors.option)] as HTMLElement[];

    this.state = this.getProxyState({
      ...this.initalState,
      currentOptionIndex: this.originalControlElement.selectedIndex,
      selectedOptionElement: this.optionElements[this.originalControlElement.selectedIndex],
    });

    setTimeout(this.fixDropdownPosition, 500);
    this.updateTabIndexed();
    this.bindEvents();
  }

  updateUI() {
    const {
      isExpanded,
      currentOptionIndex,
      selectedOptionElement
    } = this.state;

    const newSelectedOptionValue = selectedOptionElement.textContent.trim();

    const updateOriginalControl = () => {
      this.originalControlElement.value = newSelectedOptionValue;
    }

    const updateButton = () => {
      this.buttonElement.textContent = newSelectedOptionValue;
      this.buttonElement.classList.toggle(this.stateClasses.isExpanded, isExpanded);
      this.buttonElement.ariaExpanded = isExpanded ? 'true' : 'false';
      this.buttonElement.setAttribute('aria-activedescendant', this.optionElements[currentOptionIndex].id);
    }

    const updateDropdown = () => {
      this.dropdownElement.classList.toggle(this.stateClasses.isExpanded, isExpanded);
    }
    const updateOptions = () => {
      this.optionElements.forEach((optionElement: HTMLElement, index) => {
        const isCurrent = index === currentOptionIndex;
        const isSelected = optionElement === selectedOptionElement;

        optionElement.classList.toggle(this.stateClasses.isCurrent, isCurrent);
        optionElement.classList.toggle(this.stateClasses.isSelected, isSelected);
        optionElement.ariaSelected = isSelected ? 'true' : 'false';
      });
    }

    updateOriginalControl();
    updateButton();
    updateDropdown();
    updateOptions();
  }

  fixDropdownPosition = () => {
    const viewportWidth = document.documentElement.clientWidth;
    const viewportCenterX = viewportWidth / 2;
    const { width, x } = this.buttonElement.getBoundingClientRect();
    const buttonCenterX = x + width / 2;
    const isButtonOnTheLeftViewportSide = buttonCenterX < viewportCenterX;

    this.dropdownElement.classList.toggle(
      this.stateClasses.isOnTheLeftSide,
      isButtonOnTheLeftViewportSide
    );

    this.dropdownElement.classList.toggle(
      this.stateClasses.isOnTheRightSide,
      !isButtonOnTheLeftViewportSide
    );
  }

  updateTabIndexed(
    isMobileDevice: boolean = MatchMedia.mobile.matches
  ) {
    this.originalControlElement.tabIndex = isMobileDevice ? 0 : -1;
    this.buttonElement.tabIndex = isMobileDevice ? -1 : 0;
  }

  toggleExpandedState() {
    this.state.isExpanded = !this.state.isExpanded;
  }

  expand() {
    this.state.isExpanded = true;
  }

  collapse() {
    this.state.isExpanded = false;
  }

  get isNeedToExpand() {
    const isButtonFocused = document.activeElement === this.buttonElement;

    return !this.state.isExpanded && isButtonFocused;
  }

  selectCurrentOption() {
    this.state.selectedOptionElement = this.optionElements[this.state.currentOptionIndex];
  }

  onMobileMatchMediaChange = (event: MediaQueryListEvent) => {
    this.updateTabIndexed(event.matches);
  }

  onOriginalControlChange = () => {
    this.state.selectedOptionElement = this.optionElements[this.originalControlElement.selectedIndex];
  }

  onButtonClick = () => {
    this.toggleExpandedState();
  }

  onClick = (event: MouseEvent) => {
    const { target } = event;

    if (!(target instanceof HTMLElement)) return;

    const isButtonClick = target === this.buttonElement;
    const isOutsideDropdownClick = target.closest(this.selectors.dropdown) !== this.dropdownElement;

    if (!isButtonClick && isOutsideDropdownClick) {
      this.collapse();
      return;
    }

    const isOptionClick = target.matches(this.selectors.option);

    if (isOptionClick) {
      this.state.selectedOptionElement = target;
      this.state.currentOptionIndex = this.optionElements
        .findIndex((optionElement) => optionElement === target);
      this.collapse();
    }
  }

  onArrowUpKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand();
      return;
    }

    if (this.state.currentOptionIndex > 0) {
      this.state.currentOptionIndex--;
    } else {
      this.state.currentOptionIndex = this.optionElements.length - 1;
    }
  }

  onArrowDownKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand();
      return;
    }

    if (this.state.currentOptionIndex < this.optionElements.length - 1) {
      this.state.currentOptionIndex++;
    } else {
      this.state.currentOptionIndex = 0;
    }
  }

  onSpaceKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand();
      return;
    }

    this.selectCurrentOption();
    this.collapse();
  }

  onEnterKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand();
      return;
    }

    this.selectCurrentOption();
    this.collapse();
  }

  onEscapeKeyDown = () => {
    this.collapse();
  }

  onKeyDown = (event: KeyboardEvent) => {
    const { code } = event;

    const action = {
      ArrowUp: this.onArrowUpKeyDown,
      ArrowDown: this.onArrowDownKeyDown,
      Space: this.onSpaceKeyDown,
      Enter: this.onEnterKeyDown,
      Escape: this.onEscapeKeyDown
    }[code];

    if (action) {
      event.preventDefault();
      action();
    }
  }

  bindEvents() {
    MatchMedia.mobile.addEventListener('change', this.onMobileMatchMediaChange);

    this.originalControlElement.addEventListener('change', this.onOriginalControlChange);
    this.buttonElement.addEventListener('click', this.onButtonClick);

    document.addEventListener('click', this.onClick);

    this.rootElement.addEventListener('keydown', this.onKeyDown);
  }
}

class SelectCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element: HTMLElement) => {
      new Select(element);
    })
  }
}

export default SelectCollection;
