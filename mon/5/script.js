const exportBtn = document.querySelector("#export-btn");
const cellStatus = document.querySelector("#cell-status");
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
  // html 투입
  let spreadsheet = [];
  for (let i = 0; i < ROWS; i++) {
    // 클래스 cellRow 추가: cell 담기
    const cellRowEl = document.createElement("div");
    cellRowEl.classList.add("cellRow");
    spreadsheetContainer.appendChild(cellRowEl);

    let spreadsheetRow = [];
    for (let j = 0; j < COLS; j++) {
      let newCell = new Cell(i, j, "", false, false);
      spreadsheetRow.push(newCell);

      // 클래스 cell 추가
      const cellRow = document.querySelector(".cellRow");
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      cellRow.appendChild(cellEl);

      const cell = document.querySelector(".cell");
      const spanEl = document.createElement("span");
      spanEl.classList.add("spanText");
      spanEl.textContent = `${alphabets[i]} - ${j}`;
      cell.appendChild(spanEl);
    }
    spreadsheet.push(spreadsheetRow);
  }
  console.log(spreadsheet);
}

initSpreadsheet();
