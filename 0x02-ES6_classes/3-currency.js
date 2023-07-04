export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // get value for code
  get code() {
    return this_.code;
  }

  // set value for code
  set code(value) {
    this._code = value;
  }

  // get value for name
  get name() {
    return this_.name;
  }

  // set value for name
  set name(value) {
    this._name = value;
  }
  //displayFullCurrency that will return 
  // the attributes in the following format `name (code)`
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
