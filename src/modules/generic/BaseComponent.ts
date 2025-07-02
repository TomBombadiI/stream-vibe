abstract class BaseComponent {
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

        return true;
      }
    });
  }

  /** 
   * Перерисовка UI в ответ на обновление состояния
   */
  abstract updateUI(): void
}

export default BaseComponent;
