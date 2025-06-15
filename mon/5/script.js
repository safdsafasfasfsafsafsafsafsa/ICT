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
    cellData,
    isHeader,
    disabled,
    active = false
  ) {
    this.row = row;
    this.col = col;
    this.rowName = rowName;
    this.colName = colName;
    this.cellData = cellData; // 데이터
    this.isHeader = isHeader; // 헤더 여부: header 클래스의 유무 결정
    this.disabled = disabled; // 수정 가능 여부
    this.active = active; // focus 준 셀의 행/열 헤더에 active 클래스 부여 -> 스타일 변경
  }
}

// csv 생성 템플릿
exportBtn.onclick = function (e) {
  let csv = "";
  for (let i = 0; i < spreadsheet.length; i++) {
    if (i === 0) continue;
    csv +=
      spreadsheet[i]
        .filter((item) => !item.isHeader)
        .map((item) => item.cellData)
        .join(",") + "\r\n";
  }
  console.log(csv);
};

initSpreadsheet();

function initSpreadsheet() {
  // html 투입: 행렬 길이만큼 순회
  for (let i = 0; i < ROWS; i++) {
    // 클래스 cellRow 추가: cell 담기
    const cellRowEl = document.createElement("div");
    // cellRowEl.className = "cellRow";
    // spreadsheetContainer.appendChild(cellRowEl);
    let spreadsheetRow = [];

    for (let j = 0; j < COLS; j++) {
      let cellData = ""; // 동적: 기본은 비어있고 헤더에 투입하기 위해
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
        cellData = ""; // undefined 지우기
      }

      let newCell = new Cell(
        i,
        j,
        i,
        alphabets[j - 1],
        cellData, // 위치 출력에 쓸 데이터
        isHeader,
        disabled,
        false
      );
      spreadsheetRow.push(newCell);

      // 클래스 cell 추가
      createCellEl(cellRowEl);
      //   const cellEl = document.createElement("input");
      //   cellEl.classList.add("cell header");
      //   cellEl.id("cell_" + cell.row + cell.col);
      //   cellRowEl.appendChild(cellEl);

      //   const spanEl = document.createElement("span");
      //   spanEl.classList.add("spanText");
      //   if (i === 0) {
      //     if (j === 0) continue;
      //     spanEl.textContent = `${alphabets[j - 1]}`;
      //   } else {
      //     if (j === 0) {
      //       spanEl.textContent = `${i}`;
      //     } else {
      //       spanEl.textContent = ``;
      //     }
      //   }

      //   cellEl.appendChild(spanEl);
    }
    spreadsheet.push(spreadsheetRow); // 데이터 완성
  }
  drawSheet();
  console.log(spreadsheet);
}

// 동적 셀 생성
function createCellEl(cell) {
  // input 조작에 맞는 객체 속성을 만들어야.
  const cellEl = document.createElement("input");
  cellEl.className = "cell";
  cellEl.id = "cell_" + cell.row + cell.col; // id를 행렬값 받아 동적 생산, 나중에 추출 가능
  cellEl.value = cell.cellData;
  cellEl.disabled = cell.disabled;

  if (cell.isHeader) {
    cellEl.classList.add("header"); // 선택한 셀만 header 클래스 추가
  }

  // 셀 클릭 시 헤더에 하이라이트 전달
  cellEl.onclick = () => handleCellClick(cell);
  // input 변경 시 data에 전달
  cellEl.onchange = (e) => handleOnChange(e.target.value, cell);

  return cellEl;
}

// 셀 클릭 시 헤더에 하이라이트 전달
function handleCellClick(cell) {
  // 초기화
  clearHeaderActiveStates();
  // 행/열 헤더 소환
  const rowHeader = spreadsheet[cell.row][0];
  const colHeader = spreadsheet[0][cell.col];
  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.col);
  const colHeaderEl = getElFromRowCol(colHeader.row, colHeader.col);

  // active 클래스 추가
  rowHeaderEl.classList.add("active");
  colHeaderEl.classList.add("active");
}

function getElFromRowCol(row, col) {
  return document.querySelector("#cell_" + row + col);
}

// 초기화: 새 클릭 시 헤더 순회해 기존 active 지우기
function clearHeaderActiveStates() {
  const headers = document.querySelectorAll(".header");
  headers.forEach((header) => {
    header.classList.remove("active");
  });
}

// input 변경 시 data에 전달
function handleOnChange(value, cell) {
  cell.cellData = value;
}

// 스프레드시트 틀 만들기
function drawSheet() {
  // 현 스프레드시트의 길이만큼 작업
  for (let i = 0; i < spreadsheet.length; i++) {
    const rowContainerEl = document.createElement("div");
    rowContainerEl.className = "cell-row";

    for (let j = 0; j < spreadsheet[i].length; j++) {
      const cell = spreadsheet[i][j];
      rowContainerEl.append(createCellEl(cell)); // input 속성인 cellEl을 리턴받아 row~에 삽입
    }
    spreadsheetContainer.append(rowContainerEl);
  }
}

// // cellStatus에 셀 번호 전달하는 함수
// function cellClickEvent(e) {
//   // const cellEl = e.target.closest(".cell");
//   // console.log(cellEl);
//   // const row = parseInt(cellEl.dataset.row);
//   // const col = parseInt(cellEl.dataset.col);
//   // const cell = spreadsheet[row][col];
//   // e.target.textContent = `${cell.colName} - ${cell.rowName}`;
// }

// document.querySelectorAll(".cell").forEach((cellEl) => {
//   cellEl.addEventListener("click", cellClickEvent);
// });
