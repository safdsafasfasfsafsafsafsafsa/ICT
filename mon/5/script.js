const spreadsheetContainer = document.querySelector("#spreadsheet-container");
const ROWS = 10;
const COLS = 10;
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class Cell {
  constructor(row, col, data, isHeader, disabled) {
    this.row = row;
    this.col = col;
    this.data = data;
    this.isHeader = isHeader;
    this.disabled = disabled;
  }
}

function initSpreadsheet() {
  let spreadsheet = [];
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];

    for (let j = 0; j < COLS; j++) {
      let cell = new Cell(i, j, "", false, false);
      spreadsheetRow.push(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }
  console.log(spreadsheet);
}

initSpreadsheet();
