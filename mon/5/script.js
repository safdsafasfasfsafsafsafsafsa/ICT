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
    row,
    col,
    rowName,
    colName,
    data,
    isHeader,
    disabled,
    active = false
  ) {
    this.row = row;
    this.col = col;
    this.rowName = rowName;
    this.colName = colName;
    this.data = data; // 데이터
    this.isHeader = isHeader; // 헤더 여부
    this.disabled = disabled; // 수정 가능 여부
    this.active = active;
  }
}

function initSpreadsheet() {
  // html 투입: 행렬 길이만큼 순회
  for (let i = 0; i < ROWS; i++) {
    // 클래스 cellRow 추가: cell 담기
    const cellRowEl = document.createElement("div");
    cellRowEl.classList.add("cellRow");
    spreadsheetContainer.appendChild(cellRowEl);

    let spreadsheetRow = [];
    for (let j = 0; j < COLS; j++) {
      let cellData = "";
      let isHeader = false;
      let disabled = false;
      if (i === 0) {
        isHeader = true;
        disabled = true;
      }
      if (j === 0) {
        isHeader = true;
        disabled = true;
      }

      let newCell = new Cell(
        i,
        j,
        i,
        alphabets[j - 1],
        i + "-" + j, // 위치 출력에 쓸 데이터
        isHeader,
        disabled,
        false
      );
      spreadsheetRow.push(newCell);

      // 클래스 cell 추가
      // createCellEl(cellRowEl);
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      cellRowEl.appendChild(cellEl);

      const spanEl = document.createElement("span");
      spanEl.classList.add("spanText");
      if (i === 0) {
        if (j === 0) continue;
        spanEl.textContent = `${alphabets[j - 1]}`;
      } else {
        if (j === 0) {
          spanEl.textContent = `${i}`;
        } else {
          spanEl.textContent = ``;
        }
      }

      cellEl.appendChild(spanEl);
    }
    spreadsheet.push(spreadsheetRow);
  }
  console.log(spreadsheet);
}

function createCellEl(cellRowEl) {
  const cellEl = document.createElement("div");
  cellEl.classList.add("cell");
  cellRowEl.appendChild(cellEl);

  const spanEl = document.createElement("span");
  spanEl.classList.add("spanText");
  if (i === 0) {
    if (j === 0) {
      spanEl.textContent = ``;
    } else {
      spanEl.textContent = `${alphabets[j - 1]}`;
    }
  } else {
    if (j === 0) {
      spanEl.textContent = `${i}`;
    } else {
      spanEl.textContent = ``;
    }
  }
  // spanEl.textContent = `${i}-${alphabets[j - 1]}`;
  cellEl.appendChild(spanEl);
}

// cellStatus에 셀 번호 전달하는 함수
function cellClickEvent(e) {
  // const cellEl = e.target.closest(".cell");
  // console.log(cellEl);
  // const row = parseInt(cellEl.dataset.row);
  // const col = parseInt(cellEl.dataset.col);
  // const cell = spreadsheet[row][col];
  // e.target.textContent = `${cell.colName} - ${cell.rowName}`;
}

initSpreadsheet();
// document.querySelectorAll(".cell").forEach((cellEl) => {
//   cellEl.addEventListener("click", cellClickEvent);
// });
