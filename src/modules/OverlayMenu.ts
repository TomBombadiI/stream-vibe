class OverlayMenu {
    rootElement: Element | null;
    dialogElement: HTMLDialogElement | null;
    burgerButtonElement: Element | null;

    readonly selectors = {
        root: '[data-js-overlay-menu]',
        dialog: '[data-js-overlay-menu-dialog]',
        burgerButton: '[data-js-overlay-menu-burger-button]',
    }

    readonly stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        if (!this.rootElement) throw new Error(`Элемент ${this.selectors.root} не найден`);

        this.dialogElement = this.rootElement.querySelector(this.selectors.dialog) as HTMLDialogElement;
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);

        this.bindEvents();
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.dialogElement.open = !this.dialogElement.open;
        document.documentElement.classList.toggle(this.stateClasses.isLock);
    }
}

export default OverlayMenu;
