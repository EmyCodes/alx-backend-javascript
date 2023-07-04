export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // get value for code
  get() {
    return this_.code;
  }

  // set value for code
  set(value) {
    this._code = value;
  }

  // get value for name
  get() {
    return this_.name;
  }

  // set value for name
  set(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
