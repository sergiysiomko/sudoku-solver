export default class Cell {
  constructor(value = 0, row = -1, coll = -1) {
    this.value = value;
    this.row = row;
    this.coll = coll;
    this.candidates = [];
    if (this.isEmpty()) {
      this.candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    this.compartment = undefined;
  }
  isEqual(cell) {
    if (this.row == cell.row && this.coll == cell.coll) {
      return true;
    } else {
      return false;
    }
  }
  isEmpty() {
    return !this.value;
  }
  setCompartment(comp) {
    this.compartment = comp;
    return this;
  }
}
