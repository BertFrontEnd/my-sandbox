class Test4 extends Test2 {
  set testProp(a) {
    return (this._testProp = a * 10);
  }
  get testProp() {
    this._testValue = this._testProp;
    if (this._testValue > 100) {
      return this._testValue;
    } else {
      return false;
    }
  }
}
