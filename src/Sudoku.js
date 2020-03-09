import Cell from "./Cell";
import Compartment from "./Compartment";

export default class Sudoku {
  constructor() {
    this.table = this.getEmptyTable();
    this.compartments = Compartment.genCompartments(this.table);
  }
  solve() {
    let count = 0;
    let loops = 0;
    do {
      this.calcCandidates();
      count = this.checkSingleCandidate();
      count += this.checkUnique();

      loops++;
    } while (count != 0);
  }
  getCompartments() {
    return this.compartments.map(c => {
      return c.cells.map(cell => {
        return {
          ...cell,
          compartment: null,
          isChecked: false,
          isHighlighted: false,
          isHighlightedNum: false
        };
      });
    });
  }
  checkUnique() {
    let count = 0;
    // rows
    for (let i = 0; i < this.table.length; i++) {
      const row = this.table[i];
      count += this.checkSelectionUnique(row);
    }

    // collumns
    for (let i = 0; i < this.table.length; i++) {
      const coll = this.table.map(row => row[i]);
      count += this.checkSelectionUnique(coll);
    }

    // compartment
    for (let i = 0; i < this.compartments.length; i++) {
      const compartment = this.compartments[i].cells;
      count += this.checkSelectionUnique(compartment);
    }

    return count;
  }
  checkSelectionUnique(selection) {
    let count = 0;
    for (let j = 1; j < 10; j++) {
      if (selection.some(c => c.value == j)) continue;
      let indexesContains = [];
      for (let l = 0; l < selection.length; l++) {
        if (selection[l].isEmpty() && selection[l].candidates.includes(j)) {
          indexesContains.push(l);
        }
      }
      if (indexesContains.length == 1) {
        selection[indexesContains[0]].value = j;
        count++;
      }
    }
    return count;
  }
  checkSingleCandidate() {
    let count = 0;
    for (let i = 0; i < this.table.length; i++) {
      for (let j = 0; j < this.table[i].length; j++) {
        let item = this.table[i][j];
        if (item.isEmpty() && item.candidates.length == 1) {
          item.value = item.candidates[0];
          item.candidates = [];
          count++;
        }
      }
    }

    return count;
  }
  calcCandidates() {
    for (let i = 0; i < this.table.length; i++) {
      for (let j = 0; j < this.table[i].length; j++) {
        //const cell = this.table[i][j];
        this.calcCellCandidates(i, j);
      }
    }
  }
  calcCellCandidates(row, col) {
    const cell = this.table[row][col];

    // collumn check
    for (let i = 0; i < this.table.length; i++) {
      let item = this.table[i][col];
      if (i == row || item.isEmpty()) continue;
      cell.candidates = cell.candidates.filter(c => c != item.value);
    }
    // row check
    for (let i = 0; i < this.table.length; i++) {
      let item = this.table[row][i];
      if (i == col || item.isEmpty()) continue;
      cell.candidates = cell.candidates.filter(c => c != item.value);
    }

    // compartment check
    let compartment = cell.compartment;

    compartment.cells.forEach(c => {
      if (cell.isEqual(c) || c.isEmpty()) {
        return;
      }
      cell.candidates = cell.candidates.filter(n => n != c.value);
    });
  }
  log() {
    let count = 0;
    let str = "";
    for (let i = 0; i < this.table.length; i++) {
      str += this.table[i].map(c => (c.isEmpty() ? 0 : c.value)).join(" ");
      str += "\n";
      for (let j = 0; j < this.table[i].length; j++) {
        const item = this.table[i][j];
        if (item.isEmpty()) {
        } else {
          //console.log(`[${item.row},${item.coll}] : ${item.value}`);
          count++;
        }
      }
    }
    console.log(str);
    console.log(count, "with value");
  }
  setCellData(row, coll, value) {
    this.table[row][coll].value = value;
  }
  getEmptyTable() {
    let table = [
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell()
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell()
      ],

      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell()
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell()
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell()
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell()
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell()
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell()
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell()
      ]
    ];

    // set coordinates
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        table[i][j].row = i;
        table[i][j].coll = j;
      }
    }
    return table;
  }
}
