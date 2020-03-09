export default class Compartment {
  // 3x3
  constructor(cells) {
    this.cells = cells;
  }
  static genCompartments(table) {
    let res = [];
    let c1 = new Compartment([
      table[0][0],
      table[0][1],
      table[0][2],
      table[1][0],
      table[1][1],
      table[1][2],
      table[2][0],
      table[2][1],
      table[2][2]
    ]);
    table[0][0].setCompartment(c1);
    table[0][1].setCompartment(c1);
    table[0][2].setCompartment(c1);
    table[1][0].setCompartment(c1);
    table[1][1].setCompartment(c1);
    table[1][2].setCompartment(c1);
    table[2][0].setCompartment(c1);
    table[2][1].setCompartment(c1);
    table[2][2].setCompartment(c1);
    res.push(c1);

    let c2 = {};
    c2 = new Compartment([
      table[0][3],
      table[0][4],
      table[0][5],
      table[1][3],
      table[1][4],
      table[1][5],
      table[2][3],
      table[2][4],
      table[2][5]
    ]);
    table[0][3].setCompartment(c2);
    table[0][4].setCompartment(c2);
    table[0][5].setCompartment(c2);
    table[1][3].setCompartment(c2);
    table[1][4].setCompartment(c2);
    table[1][5].setCompartment(c2);
    table[2][3].setCompartment(c2);
    table[2][4].setCompartment(c2);
    table[2][5].setCompartment(c2);
    res.push(c2);

    let c3 = {};
    c3 = new Compartment([
      table[0][6],
      table[0][7],
      table[0][8],
      table[1][6],
      table[1][7],
      table[1][8],
      table[2][6],
      table[2][7],
      table[2][8]
    ]);
    table[0][6].setCompartment(c3);
    table[0][7].setCompartment(c3);
    table[0][8].setCompartment(c3);
    table[1][6].setCompartment(c3);
    table[1][7].setCompartment(c3);
    table[1][8].setCompartment(c3);
    table[2][6].setCompartment(c3);
    table[2][7].setCompartment(c3);
    table[2][8].setCompartment(c3);
    res.push(c3);

    let c4 = {};
    c4 = new Compartment([
      table[3][0],
      table[3][1],
      table[3][2],
      table[4][0],
      table[4][1],
      table[4][2],
      table[5][0],
      table[5][1],
      table[5][2]
    ]);
    table[3][0].setCompartment(c4);
    table[3][1].setCompartment(c4);
    table[3][2].setCompartment(c4);
    table[4][0].setCompartment(c4);
    table[4][1].setCompartment(c4);
    table[4][2].setCompartment(c4);
    table[5][0].setCompartment(c4);
    table[5][1].setCompartment(c4);
    table[5][2].setCompartment(c4);
    res.push(c4);

    let c5 = new Compartment([
      table[3][3],
      table[3][4],
      table[3][5],
      table[4][3],
      table[4][4],
      table[4][5],
      table[5][3],
      table[5][4],
      table[5][5]
    ]);
    table[3][3].setCompartment(c5);
    table[3][4].setCompartment(c5);
    table[3][5].setCompartment(c5);
    table[4][3].setCompartment(c5);
    table[4][4].setCompartment(c5);
    table[4][5].setCompartment(c5);
    table[5][3].setCompartment(c5);
    table[5][4].setCompartment(c5);
    table[5][5].setCompartment(c5);
    res.push(c5);

    let c6 = new Compartment([
      table[3][6],
      table[3][7],
      table[3][8],
      table[4][6],
      table[4][7],
      table[4][8],
      table[5][6],
      table[5][7],
      table[5][8]
    ]);
    table[3][6].setCompartment(c6);
    table[3][7].setCompartment(c6);
    table[3][8].setCompartment(c6);
    table[4][6].setCompartment(c6);
    table[4][7].setCompartment(c6);
    table[4][8].setCompartment(c6);
    table[5][6].setCompartment(c6);
    table[5][7].setCompartment(c6);
    table[5][8].setCompartment(c6);
    res.push(c6);

    let c7 = new Compartment([
      table[6][0],
      table[6][1],
      table[6][2],
      table[7][0],
      table[7][1],
      table[7][2],
      table[8][0],
      table[8][1],
      table[8][2]
    ]);
    table[6][0].setCompartment(c7);
    table[6][1].setCompartment(c7);
    table[6][2].setCompartment(c7);
    table[7][0].setCompartment(c7);
    table[7][1].setCompartment(c7);
    table[7][2].setCompartment(c7);
    table[8][0].setCompartment(c7);
    table[8][1].setCompartment(c7);
    table[8][2].setCompartment(c7);
    res.push(c7);

    let c8 = new Compartment([
      table[6][3],
      table[6][4],
      table[6][5],
      table[7][3],
      table[7][4],
      table[7][5],
      table[8][3],
      table[8][4],
      table[8][5]
    ]);
    table[6][3].setCompartment(c8);
    table[6][4].setCompartment(c8);
    table[6][5].setCompartment(c8);
    table[7][3].setCompartment(c8);
    table[7][4].setCompartment(c8);
    table[7][5].setCompartment(c8);
    table[8][3].setCompartment(c8);
    table[8][4].setCompartment(c8);
    table[8][5].setCompartment(c8);
    res.push(c8);

    let c9 = new Compartment([
      table[6][6],
      table[6][7],
      table[6][8],
      table[7][6],
      table[7][7],
      table[7][8],
      table[8][6],
      table[8][7],
      table[8][8]
    ]);
    table[6][6].setCompartment(c9);
    table[6][7].setCompartment(c9);
    table[6][8].setCompartment(c9);
    table[7][6].setCompartment(c9);
    table[7][7].setCompartment(c9);
    table[7][8].setCompartment(c9);
    table[8][6].setCompartment(c9);
    table[8][7].setCompartment(c9);
    table[8][8].setCompartment(c9);
    res.push(c9);

    return res;
  }
}
