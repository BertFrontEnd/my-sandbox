class Validate {
  constructor(a) {
    this.a = a;
  }

  static isNumber(num) {
    if (typeof num === 'number') {
      return true;
    } else {
      return false;
    }
  }

  static isInt(num) {
    if (Number.isInteger(num)) {
      return true;
    } else {
      return false;
    }
  }

  static isFloat(num) {
    if (!Number.isInteger(num)) {
      return true;
    } else {
      return false;
    }
  }

  static isChar(str) {
    if (str.length === 1) {
      return true;
    } else {
      return false;
    }
  }

  static isString(str) {
    if (typeof str === 'string') {
      return true;
    } else {
      return false;
    }
  }

  static isBoolean(str) {
    if (typeof str === 'boolean') {
      return true;
    } else {
      return false;
    }
  }

  static isArray(arr) {
    if (Array.isArray(arr)) {
      return true;
    } else {
      return false;
    }
  }

  static toMoney(num) {
    const numLocal = new Intl.NumberFormat('ru-RU').format(num);
    return `${numLocal}.00`;
  }
}
