export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Length must be a number');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    // if (isNaN(value)) {
    if (typeof value === "number")
      throw new TypeError('Length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an Array');
    }
    this._name = value;
  }
}
