const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const exportBtn = document.querySelector("#export-btn");
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
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
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
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
  console.log(csv);

  const csvObj = new Blob([csv]);
  console.log(csvObj);

  const csvUrl = URL.createObjectURL(csvObj);
  console.log(csvUrl);

  const a = document.createElement("a");
  a.href = csvUrl;
  a.download = "spreadsheet name.csv";
  a.click();
};

initSpreadsheet();

function initSpreadsheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];

    for (let j = 0; j < COLS; j++) {
      let cellData = "";
      let isHeader = false;
      let disabled = false;

      if (j === 0) {
        cellData = i;
        isHeader = true;
        disabled = true;
      }
      if (i === 0) {
        cellData = alphabets[j - 1];
        isHeader = true;
        disabled = true;
      }
      if (!cellData) {
        cellData = "";
      }

      let cell = new Cell(
        isHeader,
        disabled,
        cellData,
        i,
        j,
        i,
        alphabets[j - 1],
        false
      );

      spreadsheetRow.push(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }
  makeSheet();
  console.log(spreadsheet);
}

function createCellEl(cell) {
  const cellEl = document.createElement("input");
  cellEl.classList.add("cell");
  cellEl.id = "cell_" + cell.row + cell.column;
  cellEl.value = cell.data;
  if (cell.isHeader) {
    cellEl.classList.add("header");
  }

  cellEl.onclick = () => handleClickCell(cell);
  cellEl.onchange = (e) => handleUpdateCell(e.target, cell);

  return cellEl;
}

function handleClickCell(cell) {
  clearHeaderActiveStates();

  const rowHeader = spreadsheet[cell.row][0];
  const columnHeader = spreadsheet[0][cell.column];
  const rowHeaderEl = document.querySelector(
    "#cell_" + rowHeader.row + rowHeader.column
  );
  const columnHeaderEl = document.querySelector(
    "#cell_" + columnHeader.row + columnHeader.column
  );
  rowHeaderEl.classList.add("active");
  columnHeaderEl.classList.add("active");

  document.querySelector("#cell-status").innerHTML =
    cell.rowName + "-" + cell.columnName;
}

function clearHeaderActiveStates() {
  const headers = document.querySelectorAll(".header");
  headers.forEach((header) => {
    header.classList.remove("active");
  });
}

function handleUpdateCell(target, cell) {
  cell.data = target.value;
}

function makeSheet() {
  for (let i = 0; i < spreadsheet.length; i++) {
    const cellRowEl = document.createElement("div");
    cellRowEl.classList.add("cell-row");

    for (let j = 0; j < spreadsheet[i].length; j++) {
      const newCellEl = createCellEl(spreadsheet[i][j]);
      cellRowEl.append(newCellEl);
    }
    spreadSheetContainer.append(cellRowEl);
  }
}
