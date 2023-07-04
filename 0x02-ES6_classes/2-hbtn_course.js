export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(setName) {
    this._name = setName;
  }

  get length() {
    return this._length;
  }

  set length(setLength) {
    this._length = setLength;
  }

  get students() {
    return this._students;
  }

  set students(studentName) {
    this._name = studentName;
  }
}
