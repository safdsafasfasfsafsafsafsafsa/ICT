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
  constructor(
    data,
    row,
    col,
    rowName,
    colName,
    isHeader,
    disabled,
    active = false
  ) {
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

exportBtn.onclick = function (e) {
  let csv = "";
  for (let i = 0; i < spreadsheet.length; i++) {
    if (i === 0) continue;
    csv +=
      spreadsheet[i]
        .filter((item) => !item.isHeader)
        .map((item) => item.data)
        .join(",") + "\r\n";
  }

  const csvObj = new Blob([csv]);
  console.log("csvObj", csvObj);

  const csvUrl = URL.createObjectURL(csvObj);
  console.log("csvUrl", csvUrl);

  const a = document.createElement("a");
  a.href = csvUrl;
  a.download = "spreadsheet name.csv";
  a.click();
};

initSpreadSheet();

function initSpreadSheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];

    for (let j = 0; j < COLS; j++) {
      let data = "";
      let isHeader = false;
      let disabled = false;

      // 행렬 방향 헷갈리지 말기
      if (j === 0) {
        data = i;
        isHeader = true;
        disabled = true;
      }
      if (i === 0) {
        data = alphabets[j - 1];
        isHeader = true;
        disabled = true;
      }
      if (!data) {
        data = "";
      }

      let cell = new Cell(
        data,
        i,
        j,
        i,
        alphabets[j - 1],
        isHeader,
        disabled,
        false
      );
      spreadsheetRow.push(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }
  makeSheet();
}

function createCellEl(cell) {
  const cellEl = document.createElement("input");
  cellEl.classList.add("cell");
  cellEl.id = "cell_" + cell.row + cell.col;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;
  if (cell.isHeader) {
    cellEl.classList.add("header");
  }

  // 액티브,수정
  cellEl.onclick = () => handleCellClick(cell);
  cellEl.onchange = (e) => handleOnChange(e.target.value, cell);

  return cellEl;
}

function handleCellClick(cell) {
  clearHeaderActiveStates();

  const rowHeader = spreadsheet[cell.row][0];
  const colHeader = spreadsheet[0][cell.col];
  const rowHeaderEl = document.querySelector(
    "#cell_" + rowHeader.row + rowHeader.col
  );
  const colHeaderEl = document.querySelector(
    "#cell_" + colHeader.row + colHeader.col
  );

  rowHeaderEl.classList.add("active");
  colHeaderEl.classList.add("active");
}

function handleOnChange(value, cell) {
  cell.data = value;
}

function clearHeaderActiveStates() {
  const headers = document.querySelectorAll(".header");
  headers.forEach((header) => {
    header.classList.remove("active");
  });
}

function makeSheet() {
  for (let i = 0; i < spreadsheet.length; i++) {
    const cellRowEl = document.createElement("div");
    cellRowEl.classList.add("cell-row");

    for (let j = 0; j < spreadsheet[i].length; j++) {
      const cellEl = createCellEl(spreadsheet[i][j]);
      cellRowEl.append(cellEl);
    }
    spreadsheetContainer.append(cellRowEl);
  }
}
