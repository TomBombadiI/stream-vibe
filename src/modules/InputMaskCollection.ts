import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector";
import IMask from "imask";

const rootSelector = '[data-js-input-mask]';

class InputMask {
  selectors = {
    root: rootSelector
  }

  rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;

    this.init();
  }

  init() {
    const mask = this.rootElement.getAttribute(
      getAttrNameFromSelector(this.selectors.root)
    );

    IMask(this.rootElement, { mask });
  }
}

class InputMaskCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element: HTMLElement) => {
      new InputMask(element);
    });
  }
}

export default InputMaskCollection;
