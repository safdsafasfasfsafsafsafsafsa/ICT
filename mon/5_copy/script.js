const exportBtn = document.querySelector("#export-btn");
const cellStatus = document.querySelector("#cell-status");
const spreadsheetContainer = document.querySelector("#spreadsheet-container");
const spreadsheet = [];

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
  constructor(data, row, col, rowName, colName, isHeader, disabled, active) {
    this.data = data;
    this.row = row;
    this.col = col;
    this.rowName = rowName;
    this.colName = colName;
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.active = active;
  }
}

exportBtn.onclick = function (e) {};

initSpreadSheet();

function initSpreadSheet() {
  for (let i = 0; i < ROWS; i++) {
    const cellRowEl = document.createElement("div");
    let spreadsheetRow = [];

    for (let j = 0; j < COLS; j++) {
      let data = "";
      let isHeader = false;
      let disabled = false;

      if (i === 0) {
        data = i;
        isHeader = true;
        disabled = true;
      }
      if (j === 0) {
        data = alphabets[j - 1];
        isHeader = true;
        disabled = true;
      }
      if (!colName) {
        data = "";
      }

      let cell = new Cell(
        i + "-" + j,
        i,
        j,
        i,
        alphabets[j - 1],
        isHeader,
        disabled,
        false
      );
      spreadsheetRow.push(cell);

      createCell(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }
}

function createCell(cell) {}
