class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Невозможно создать экземпляр абстрактного класса BaseComponent!');
    }
  }

  getProxyState = (initialState: any) => {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop];
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop];

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI();
        }

        return newValue !== oldValue;
      }
    });
  }

  /** 
   * Перерисовка UI в ответ на обновление состояния
   */
  updateUI = (): void => {
    throw new Error('Необходимо реализовать метод UI');
  }
}

export default BaseComponent;
