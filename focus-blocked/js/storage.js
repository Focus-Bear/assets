class Storage {
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }

  static clearItems(keys) {
    keys.forEach((key) => localStorage.clear(key));
  }
}
